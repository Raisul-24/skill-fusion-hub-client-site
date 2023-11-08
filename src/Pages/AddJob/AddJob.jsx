import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';



const AddJob = () => {
   const { user } = useContext(AuthContext);
   const [error, setError] = useState('');
   const [jobTitle, setJobTitle] = useState('');
   const [deadline, setDeadline] = useState('');
   const [category, setCategory] = useState('');
   const [minPrice, setMinPrice] = useState('');
   const [maxPrice, setMaxPrice] = useState('');
   const [description, setDescription] = useState('');
   const navigate = useNavigate();

   const isValidDate = (date) => {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      // console.log(currentDate)
      return selectedDate > currentDate;
   };

   const handleAddJob = e => {
      e.preventDefault();
      const form = e.target;
      const email = user?.email;
      const newJob = {
         job_title: jobTitle,
         category: category,
         email: email,
         deadline: deadline,
         minimum_price: minPrice,
         maximum_price: maxPrice,
         short_description: description
      }
      fetch('https://skill-fusion-hub-online-market-place-server-side.vercel.app/jobs', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newJob)
      })
         .then(res => res.json())
         .then(data => {
            console.log('insert to jobs', data);
         })
      // 2st fetch
      fetch('https://skill-fusion-hub-online-market-place-server-side.vercel.app/postedJobs', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newJob)
      })
         .then(res => res.json())
         .then(data => {
            // console.log('insert',data);
            if (data.insertedId) {
               navigate('/myPostedJobs');
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your Job has been added',
                  showConfirmButton: false,
                  timer: 1500
               });
            }
            form.reset()
         })
   }
   return (
      <div >
         <div className="container mx-auto">
            <div className="bg-cyan-50 md:pt-20 rounded-xl py-8 my-10 md:mb-20">
               <h2 className="text-3xl font-extrabold text-center font-rancho text-[#374151]">Add New Job</h2>
               <p className="text-center my-5 mb-8">
                  Skill Fusion Hub is a unique platform that connects freelancers and remote workers <br /> with businesses of all sizes. We offer a wide range of jobs, from web development <br />  and graphic design to social media marketing and content writing.</p>
               <form onSubmit={handleAddJob}>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 px-4 md:px-40">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Job-title</span>
                        </label>
                        <label className="input-group ">
                           <input type="text" placeholder="Enter job title..."
                              onBlur={(e) => setJobTitle(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Job-category</span>
                        </label>
                        <label className="input-group">
                           <select name="category" className="input input-bordered w-full bg-white"
                              onChange={(e) => setCategory(e.target.value)}>
                              <option value="Web Development">Web Development</option>
                              <option value="Graphics Design">Graphics Design</option>
                              <option value="Digital Marketing">Digital Marketing</option>
                           </select>
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Minimum Price</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter minimum price..."
                              onBlur={(e) => setMinPrice(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Maximum Price</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter maximum price..."
                              onBlur={(e) => setMaxPrice(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Select DeadLine</span>
                        </label>
                        <label className="input-group">
                           <input type="date"
                              onBlur={(e) => {
                                 if (isValidDate(e.target.value)) {
                                    setDeadline(e.target.value);
                                    setError('');
                                 } else {
                                    setError('Please enter a valid future date.');
                                 }
                              }}
                              className="input input-bordered w-full bg-white" />
                        </label>
                        {error && <div className="text-red-600">{error}</div>}
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Email</span>
                        </label>
                        <label className="input-group">
                           <input type="text" name="email"
                              defaultValue={user?.email}
                              className="input input-bordered w-full bg-white" readOnly />
                        </label>
                     </div>
                  </div>

                  <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Description</span>
                     </label>
                     <label className="input-group">
                        <textarea type="text" placeholder="Enter full description..."
                           onBlur={(e) => setDescription(e.target.value)}
                           className="input input-bordered w-full py-2 bg-white h-24" />
                     </label>
                  </div>

                  <div className="form-control md:w-full px-4 md:px-40 md:my-7">
                     <label className="input-group text-white">
                        <input type="submit" value="Add Job"
                           className="input bg-slate-200 border-2 border-cyan-500 rounded-xl w-full font-bold text-2xl py-2 text-[#374151]" />
                     </label>
                  </div>
               </form>
            </div>

         </div>
      </div>
   );
};

export default AddJob;