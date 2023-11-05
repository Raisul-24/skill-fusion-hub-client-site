import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
   const job = useLoaderData();
   console.log(job);
   return (
      <div>
      </div>
   );
};

export default JobDetails;