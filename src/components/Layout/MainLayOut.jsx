import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayOut = () => {
   return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   );
};

export default MainLayOut;