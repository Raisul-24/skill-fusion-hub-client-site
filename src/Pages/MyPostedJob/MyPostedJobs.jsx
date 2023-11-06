import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {
   const { user } = useContext(AuthContext);
   const [postedJobs, setPostedJobs] = useState([]);

   const url = `http://localhost:3001/postedJobs?email=${user?.email}`;

   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setPostedJobs(data))
   }, [url])
   // console.log(postedJobs)
   const handleDelete = id => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:3001/postedJobs/${id}`,{
               method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
               console.log(data);
               if(data.deletedCount > 0){
                  Swal.fire(
                     'Deleted!',
                     'Your job has been deleted.',
                     'success'
                  )
                  const remaining = postedJobs.filter(booking => booking._id !==id);
                  setPostedJobs(remaining);
               }
            })
            
         }
      })
   }

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
                        <td><button onClick={() => handleDelete(`${job._id}`)}
                         className="btn btn-xs btn-outline btn-error">Delete</button></td>
                        <td><Link to={`/updateJob/${job._id}`}><button className="btn btn-xs btn-outline btn-success">Update</button></Link></td>
                     </tr>
                  </tbody>)
               }

            </table>
         </div>
      </div>
   );
};

export default MyPostedJobs;