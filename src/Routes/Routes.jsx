import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import SingleTouristSpot from "../pages/SingleTouristSpot/SingleTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/touristspots/:id',
            element: <SingleTouristSpot></SingleTouristSpot>,
            loader: ({params}) => fetch(`http://localhost:5000/touristspots/${params.id}`)
        },
        {
           path: '/addtouristspot',
           element: <AddTouristSpot></AddTouristSpot>
        },
        {
           path: '/alltouristspot',
           element: <AllTouristSpot></AllTouristSpot>
        },
      ],
    },
  ]);

  export default router;