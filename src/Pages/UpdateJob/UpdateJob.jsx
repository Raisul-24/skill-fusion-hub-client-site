import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
   const job = useLoaderData();
   // console.log(job)
   const {_id, job_title, email, deadline, minimum_price, maximum_price,short_description } = job;


   const [error, setError] = useState('');
   const [updatedJobTitle,setUpdatedJobTitle] = useState('');
   const [updatedDeadline,setUpdatedDeadline] = useState('');
   const [updatedCategory,setUpdatedCategory] = useState('');
   const [updatedMinPrice,setUpdatedMinPrice] = useState('');
   const [updatedMaxPrice,setUpdatedMaxPrice] = useState('');
   const [updatedDescription,setUpdatedDescription] = useState('');
   
   const navigate = useNavigate();

   const isValidDate = (date) => {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      // console.log(currentDate)
      return selectedDate > currentDate;
    };


   const handleUpdateJob = e =>{
      e.preventDefault();
      const updatedEmail =e.target.email.value;
      const updatedJob = { 
         job_title:updatedJobTitle,
         category: updatedCategory,
         email: updatedEmail,
         deadline:updatedDeadline,
         minimum_price:updatedMinPrice,
         maximum_price:updatedMaxPrice,
         short_description: updatedDescription}
      // console.log(updatedJob);
            // send data to server
            fetch(`http://localhost:3001/postedJobs/${_id}`,{
               method: 'PUT',
               headers: {
                  'Content-type' : "application/json"
               },
               body: JSON.stringify(updatedJob)
            })
            .then(res => res.json())
            .then(data =>{
               console.log(data);
               if(data.modifiedCount >0 ){
                  navigate('/myPostedJobs');
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Product has been Updated',
                     showConfirmButton: false,
                     timer: 1500
                   })          
               }
               // form.reset();
            })
   }
   return (
      <div>
         <div className="container mx-auto">
            <div className=" bg-lime-50 md:pt-20 rounded-xl py-8 my-10 md:mb-20">
               <h2 className="text-3xl font-extrabold text-center font-rancho text-[#374151] mb-6">Update Job</h2>
               <form onSubmit={handleUpdateJob}>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 px-4 md:px-40">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Job Title: (editable)</span>
                        </label>
                        <label className="input-group ">
                           <input type="text" defaultValue={job_title}
                              onBlur={(e) => setUpdatedJobTitle(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Select Job Category</span>
                        </label>
                        <label className="input-group">
                           <select name="category" className="input input-bordered w-full bg-white"
                            onChange={(e) => setUpdatedCategory(e.target.value)}>
                              <option value="Web Development">Web Development</option>
                              <option value="Graphics Design">Graphics Design</option>
                              <option value="Digital Marketing">Digital Marketing</option>
                           </select>
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Minimum Price <span className="text-sm">(prev-{minimum_price})</span></span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter minimum price...."
                           onBlur={(e) => setUpdatedMinPrice(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Maximum Price <span className="text-sm">(prev-{maximum_price})</span></span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter maximum price...."
                           onBlur={(e) => setUpdatedMaxPrice(e.target.value)}
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Select DeadLine <span className=" font-normal text-red-400">prev({deadline})</span></span>
                        </label>
                        <label className="input-group">
                           <input type="date" 
                           onBlur={(e) =>{ if (isValidDate(e.target.value)) {
                              setUpdatedDeadline(e.target.value);
                              setError('');
                            } else {
                              setError('Please enter a valid future date.');
                            }}}
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
                            defaultValue={email}
                              className="input input-bordered w-full bg-white" readOnly/>
                        </label>
                     </div>                    
                  </div>
                 
                  <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Description: (editable)</span>
                     </label>
                     <label className="input-group">
                        <textarea type="text" defaultValue={short_description}
                        onBlur={(e) => setUpdatedDescription(e.target.value)}
                           className="input input-bordered w-full py-2 bg-white h-24" />
                     </label>
                  </div>
                  
                  <div className="form-control md:w-full px-4 md:px-40 md:my-7">
                     <label className="input-group text-white">
                        <input type="submit" value="Update Job"
                           className="input bg-slate-200 border-2 border-lime-600 rounded-xl w-full font-bold text-2xl py-2 text-[#374151]" />
                     </label>
                  </div>
               </form>
            </div>
           
         </div>
      </div>
   );
};

export default UpdateJob;