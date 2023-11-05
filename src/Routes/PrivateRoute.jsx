import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <div className="progress w-full"></div>;
  }

  if (!loading && !user?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children
};

export default PrivateRoute;