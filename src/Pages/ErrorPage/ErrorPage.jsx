import { Link } from "react-router-dom";


const ErrorPage = () => {
   return (
      <div>
      <div className="flex flex-col justify-center items-center">
         <h2 className="text-3xl text-red-500 font-bold pt-10 pb-4">404 Page Not Found!!!</h2>
         <button className="btn btn-outline btn-info "><Link to="/">Back to Home</Link></button>
         <img src="https://i.ibb.co/93T9jTV/yalantis-interactive-404.gif" alt="" className="my-5 rounded-3xl" />
      </div>
   </div>
   );
};

export default ErrorPage;