import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";


const Navbar = () => {
   const {user,logOut} = useContext(AuthContext);
   // console.log(user)
   const handleLogOut = async() =>{
      try {
         logOut()
         toast.success('Log Out Successfully!!');
      } catch (error) {
         toast.error(error.message);
      }
   }
   const navLinks = <>
      <li ><Link to='/'>Home</Link></li>
      <li><Link to='/addJob'>Add Job</Link></li>
      <li><Link to='/myPostedJobs'>My Posted Job</Link></li>
      <li><Link to='/myBids'>My Bids</Link></li>
      <li><Link to='/bidRequests'>Bid Request</Link></li>
   </>
   const profileLinks = <>
      <li><Link to='/profile'>Profile</Link></li>
      <li><Link to='/settings'>Settings</Link></li>
      {
         user?.email ?<li><Link onClick={handleLogOut}>Logout</Link></li>
         :
         <li><Link to='/login'>Login</Link></li>
      }
   </>
   // className={( {isActive} ) => isActive ? "btn btn-outline btn-success" : "btn btn-ghost"} 
   return (
      <div className="navbar bg-base-100 items-center">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
               </ul>
            </div>
            <div className="flex items-center">
               <img src="images/logo.png" className="w-16 " alt=""  />
            <Link to='/' className="hidden md:flex btn btn-ghost normal-case text-xl font-bold">Skill Fusion Hub </Link>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navLinks}
            </ul>
         </div>
         <div className="navbar-end">
            <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost">
                  <div className="">
                     {
                        user ?  <div className="flex items-center">
                           <h1 className="text-xs md:text-sm font-mono mr-0 md:mr-2">{user?.displayName}</h1>
                           <img src={user?.photoURL} className="w-10 rounded-full"/> 
                        </div>
                        :
                        <button className=""><Link to='/login'>Login</Link></button>
                        
                        // <img src="https://i.ibb.co/GcKBj9F/boy2.jpg" />
                     }
                     
                  </div>
               </label>
               <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  {profileLinks}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;