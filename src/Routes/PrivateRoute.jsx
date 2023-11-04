import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

   const {user, loading} = useContext(AuthContext)
   if (loading) {
      return <div className="progress w-full"></div>;
    }
  
    if (!loading && !user?.email) {
      return <Navigate to="/login" />;
    }
   return children
};

export default PrivateRoute;