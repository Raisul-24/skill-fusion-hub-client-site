import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const BidRequests = () => {
   const { user } = useContext(AuthContext);
   // console.log(user)
   const [bidRequest, setBidRequest] = useState([]);
   const [loading, setLoading] = useState(true);


   const url = `https://skill-fusion-hub-online-market-place-server-side.vercel.app/myCart?buyer_email=${user?.email}`;
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setBidRequest(data);
            setLoading(false)
         })
   }, [url])
   // console.log(bidRequest)


   const handleAccept = (id) => {
      updateBidStatus(id, 'Accepted');
   };

   const handleReject = (id) => {
      updateBidStatus(id, 'Rejected');
   };
   const updateBidStatus = (id, status) => {
      fetch(`https://skill-fusion-hub-online-market-place-server-side.vercel.app/myCart/${id}`,{
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({status: status})
      })
      .then(res=> res.json())
      .then(data =>{
         console.log(data);
         if(data.modifiedCount >0){
            // update state
            const updatedBidRequest = bidRequest.map((job) => {
               if (job._id === id) {
                 return { ...job, status };
               }
               return job;
             });
             setBidRequest(updatedBidRequest);
            // const updatedBidRequest = bidRequest.filter((job) => job._id !== id);
            // setBidRequest(updatedBidRequest);
         }
      })

   }

   if (loading) {
      return <div className="flex justify-center"><span className="loading loading-bars loading-lg"></span></div>; 
    }
   return (
      <div>
         <h1 className="text-2xl md:text-5xl text-center font-bold my-5">Bid Request</h1>
         <div className="overflow-x-auto mb-16">
            <table className="table">
               <thead>
                  <tr>
                     <th>Job Title</th>
                     <th>Developer Email</th>
                     <th>DeadLine</th>
                     <th>Progress</th>
                     <th>Action</th>
                  </tr>
               </thead>
               {
                  bidRequest.map(job => <tbody key={job._id}>
                     <tr>
                        <td>
                           <div className="font-semibold">{job.job_title}</div>
                        </td>
                        <td>
                           <div>{job.developer_email}</div>
                        </td>
                        <td>
                           <span className="badge md:badge-ghost badge-sm">{job.buyer_deadline}</span>
                        </td>
                        <td>{job.status === 'Accepted' && job?.completeStatus ? job?.completeStatus : <h1>Pending</h1>}</td>
                        <td>
                        <div>
                    {job.status === 'Accepted' || job.status === 'Rejected' ? (
                      job.status
                    ) : (
                      <>
                        <button className="btn btn-outline btn-success btn-xs mr-2" onClick={() => handleAccept(job._id)}>
                          Accept
                        </button>
                        <button className="btn btn-outline btn-error btn-xs" onClick={() => handleReject(job._id)}>
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                        </td>
                     </tr>
                  </tbody>)
               }

            </table>
         </div>
      </div>
   );
};

export default BidRequests;