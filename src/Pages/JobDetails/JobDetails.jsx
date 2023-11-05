import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

const JobDetails = () => {
   const job = useLoaderData();
   // console.log(job);
   const { user } = useContext(AuthContext);
   // console.log(user.email)
   const [price, setPrice] = useState('');
   const [developerDeadline,setDeveloperDeadline] = useState('');
   const { job_title, email, deadline, minimum_price, maximum_price } = job;
   // console.log(email)

   const handleMyBids = e =>{
      e.preventDefault();
      const developerEmail = user?.email;
      const buyerEmail = {email}
      const jobTitle = {job_title}
      const myNewBid ={
         job_title:jobTitle,
         buyer_email: buyerEmail,
         developer_email: developerEmail,
         buyer_deadline:developerDeadline,
         price:price
      }
      console.log(myNewBid)
   }
   return (
      <div>
         <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: 'url(/images/jobDetails2.jpeg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl">
               <div>
               <h1 className="mt-5 text-5xl font-bold text-center text-neutral-content">Job Details</h1>
                  <div className="card-body">                 
                     <form onSubmit={handleMyBids}>
                     <div className="form-control md:w-full px-4 md:px-40">
                           <label className="label">
                              <span className="label-text text-white">Job Title: </span>
                           </label>
                           <input type="text" 
                           defaultValue={job_title} className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" readOnly />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 gap-8">
                        <div className="form-control md:w-full">
                           <label className="label">
                              <span className="label-text text-white">Buyer Email: </span>
                           </label>
                           <input type="email" 
                            defaultValue={email} className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" readOnly />
                        </div>
                        <div className="form-control md:w-full">
                           <label className="label">
                              <span className="label-text text-white">Deadline of this job: <span className="text-red-400 font-bold">({deadline})</span> </span>
                           </label>
                           <input type="text" onBlur={(e) => setDeveloperDeadline(e.target.value)}
                            placeholder="Enter probable date of completion..." className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]"/>
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
                              <span className="label-text text-white">Bidding Amount <span className="text-red-400 font-bold">range({minimum_price} - {maximum_price})</span></span>
                           </label>
                           <input type="text" onBlur={(e) => setPrice(e.target.value)}
                            placeholder="Enter your bidding amount..."  className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full text-lg py-2 text-[#374151]" required />
                        </div>
                        </div>
                        <div className="form-control md:w-full px-4 md:px-40 md:my-7">
                           <label className="label">
                              <input type="submit" value="Place Your Bid"
                                 className="btn btn-outline btn-info" />
                           </label>
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