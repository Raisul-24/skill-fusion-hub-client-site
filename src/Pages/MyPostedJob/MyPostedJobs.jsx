import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyPostedJobs = () => {
   const { user } = useContext(AuthContext);
   const [postedJobs, setPostedJobs] = useState([]);

   const url = `http://localhost:3001/postedJobs?email=${user?.email}`;

   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setPostedJobs(data))
   }, [url])
   console.log(postedJobs)
   return (
      <div>
         <div className="overflow-x-auto ">
            <h1 className="text-5xl text-center font-bold my-5"> Posted Jobs</h1>
            <table className="table">
               <thead>
                  <tr>
                     <th>Job Title</th>
                     <th>DeadLine</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>

               {
                  postedJobs.map(job => <tbody key={job._id}>
                     <tr>
                        <td>
                           <div className="font-bold">{job.job_title}</div>
                        </td>
                        <td>
                           <span className="badge badge-ghost badge-sm">{job.deadline}</span>
                        </td>
                        <td><button className="btn btn-xs btn-outline btn-error">Delete</button></td>
                        <td><button className="btn btn-xs btn-outline btn-success">Update</button></td>
                     </tr>
                  </tbody>)
               }

            </table>
         </div>
      </div>
   );
};

export default MyPostedJobs;