import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
   // console.log(job)
   const { _id, job_title, deadline, minimum_price, maximum_price, short_description } = job;
      const handleBidNow = e =>{
         e.preventDefault();
      }
   return (
      <div>
         {/* {_id} */}
         <div className="relative flex flex-col text-gray-700 bg-white shadow-xl w-full md:w-96 rounded-xl bg-clip-border mb-10">
            <div className="p-6">
               <h5 className="block mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Job Title: {job_title}
               </h5>
               <h5 className="block mb-2 text-lg font-medium leading-snug tracking-normal text-red-600">
                  Deadline: {deadline}
               </h5>
               <p className="block text-base leading-relaxed text-inherit font-bold">
                  <span className='font-semibold'>Price range: </span>
                  {minimum_price}$ - {maximum_price}$
               </p>
               <p className="block text-base leading-relaxed text-inherit h-24">
                  <span className='font-semibold'>Job-description:</span> <br />
                  {short_description}
               </p>
            </div>
            <div className="p-6 pt-0">

               <button onClick={handleBidNow}
                  className="select-none rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
               >
                  <Link to={`jobDetails/${_id}`}>
                     Bid Now
                  </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

JobCard.propTypes = {
   job: PropTypes.node,
}
export default JobCard;