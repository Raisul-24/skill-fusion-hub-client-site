import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
   const { user } = useContext(AuthContext)
   return (
      <div className="my-2 md:my-10">
         {
            user ? <div>
               <h2 className="text-2xl text-center my-5">Your Profile</h2>
               <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                     {
                        user ? <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                           :
                           <h2 className="card-title text-red-300 max-w-sm rounded-lg shadow-2xl">Photo not Found!!</h2>
                     }
                     <div>
                        <h1 className="text-5xl font-bold">Name: {user?.displayName}</h1>
                        <p className="py-6">Email: {user?.email}</p>
                        <button className="btn btn-primary">Get Started</button>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center">

               </div>
            </div>
               : <div className="flex justify-center text-3xl font-extrabold">
                  <button className="btn btn-outline btn-error"><Link to='/login'>Login First </Link></button>
               </div>
         }
      </div>
   );
};

export default Profile;