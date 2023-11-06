import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyBids = () => {
   const { user } = useContext(AuthContext);
   // console.log(user)
   const [myBids, setMyBids] = useState([]);

   const url = `http://localhost:3001/myCart?developer_email=${user?.email}`;

   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setMyBids(data))
   }, [url])
   // console.log(myBids)

   const handleCompleteStatus = (id) => {
      updateBidStatus(id, 'Completed');
   };
   const updateBidStatus = (id, status) => {
      fetch(`http://localhost:3001/myCart/${id}`,{
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({completeStatus: status})
      })
      .then(res=> res.json())
      .then(data =>{
         console.log(data);
         if(data.modifiedCount >0){
            // update state
            const updatedBidRequest = myBids.map((job) => {
               if (job._id === id) {
                 return { ...job, status };
               }
               return job;
             });
             setMyBids(updatedBidRequest);
         }
      })

   }
   return (
      <div>
         <h1 className="text-2xl md:text-5xl text-center font-bold my-5">My Bids</h1>
         <div className="overflow-x-auto mb-16">

            <table className="table">
               <thead>
                  <tr>
                     <th>Job Title</th>
                     <th>Buyer Email</th>
                     <th>DeadLine</th>
                     <th>Status</th>
                     <th>Complete</th>
                  </tr>
               </thead>
               {
                  myBids.map(job => <tbody key={job._id}>
                     <tr>
                        <td>
                           <div className="font-semibold">{job.job_title}</div>
                        </td>
                        <td>
                           <div>{job.buyer_email}</div>
                        </td>
                        <td>
                           <span className="badge md:badge-ghost badge-sm">{job.buyer_deadline}</span>
                        </td>
                        <td><button className="btn-xs btn-outline btn-accent">{job?.status ? job?.status : <p>Pending</p>}</button></td>
                        <td>
                           {job?.completeStatus ?job?.completeStatus : job?.status === "Accepted" &&
                           <button onClick={() => handleCompleteStatus(job._id)}
                            className="btn btn-xs btn-outline btn-success">Complete</button> 
                            }
                            </td>
                     </tr>
                  </tbody>)
               }

            </table>
         </div>
      </div>
   );
};

export default MyBids;