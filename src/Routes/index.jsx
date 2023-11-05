import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../components/Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Profile from "../components/Layout/ProfileInformation/Profile";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJob/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequest/BidRequests";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
         {
            path:'/',
            element:<Home></Home>,
         },
         {
            path: 'profile',
            element: <Profile></Profile>,
         },
         {
            path: 'about',
            element:<About></About>,
         },
         {
            path: 'addJob',
            element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
         },
         {
            path: 'myPostedJobs',
            element: <MyPostedJobs></MyPostedJobs>,
         },
         {
            path: 'myBids',
            element: <MyBids></MyBids>,
         },
         {
            path: 'bidRequests',
            element: <BidRequests></BidRequests>,
         },
         {
            path: 'jobDetails/:id',
            element: <JobDetails></JobDetails>,
            loader: ({params}) => fetch(`http://localhost:3001/jobs/${params.id}`),
         }
      ],
   },
      {
         path:'/login',
         element:<Login></Login>
      },
      {
         path: '/register',
         element: <Register></Register>
      },
      {
         path: '/profile',
         element: <Profile></Profile>
      }
   
]);

export default router;