import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const JobDetails = () => {
   const job = useLoaderData();
   // console.log(job);
   const { job_title, email, deadline, minimum_price, maximum_price } = job;
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();
   // console.log(user.email)
   const [price, setPrice] = useState('');
   const [developerDeadline, setDeveloperDeadline] = useState('');
   // console.log(email)

   const handleMyBids = (e) => {
      e.preventDefault();
      if (user.email === email) {
         Swal.fire({
            icon: 'error',
            title: 'You cannot bid on your own job.',
            showConfirmButton: false,
            timer: 2000,
         });
      } else {
         const form = e.target;
         const developerEmail = user?.email;
         const buyerEmail = form.buyer_email.value;
         const jobTitle = form.job_Title.value;
         const myNewBid = {
            job_title: jobTitle,
            buyer_email: buyerEmail,
            developer_email: developerEmail,
            buyer_deadline: developerDeadline,
            price: price
         }
         console.log(myNewBid)
         fetch('http://localhost:3001/myCart', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(myNewBid)
         })
            .then(res => res.json())
            .then(data => {
               console.log('insert', data);
               if (data.insertedId) {
                  navigate('/myBids');
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Your Job has been added',
                     showConfirmButton: false,
                     timer: 1500
                  });
               }
               form.reset()
            });
      }
   }
   return (
      <div>
         <div className="hero min-h-fit rounded-xl" style={{ backgroundImage: 'url(/images/jobDetails2.jpeg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl">
               <div>
                  <h1 className="mt-5 text-5xl font-bold text-center text-neutral-content">Job Details</h1>
                  <div className="card-body">
                     <form onSubmit={handleMyBids}>
                        <div className="form-control md:w-full px-0 md:px-12 lg:px-40">
                           <label className="label">
                              <span className="label-text text-white">Job Title: </span>
                           </label>
                           <input type="text" name="job_Title"
                              defaultValue={job_title} className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" readOnly />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-12 lg:px-40 gap-8">
                           <div className="form-control md:w-full">
                              <label className="label">
                                 <span className="label-text text-white">Buyer Email: </span>
                              </label>
                              <input type="email" name="buyer_email"
                                 defaultValue={email} className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" readOnly />
                           </div>
                           <div className="form-control md:w-full ">
                              <label className="label">
                                 <span className="label-text text-white">Your Email: </span>
                              </label>
                              <input type="email"
                                 defaultValue={user.email} className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" readOnly />
                           </div>
                           <div className="form-control md:w-full">
                              <label className="label">
                                 <span className="label-text text-white">Deadline of this job: <span className="text-red-400 font-bold">({deadline})</span> </span>
                              </label>
                              <input type="text" onBlur={(e) => setDeveloperDeadline(e.target.value)}
                                 placeholder="Enter probable date of completion..." className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" required />
                           </div>


                           <div className="form-control md:w-full">
                              <label className="label">
                                 <span className="label-text text-white">Bidding Amount: <span className="text-red-400 font-bold">range({minimum_price} - {maximum_price})</span></span>
                              </label>
                              <input type="text" onBlur={(e) => setPrice(e.target.value)}
                                 placeholder="Enter your bidding amount..." className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" required />
                           </div>
                        </div>

                        <div className="form-control w-full px-4 md:px-40 my-7">
                           <button className="">
                              <input type="submit" value="Place Your Bid"
                                 className="btn btn-outline btn-info" />
                           </button>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;