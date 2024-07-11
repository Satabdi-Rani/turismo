import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import SingleTouristSpot from "../pages/SingleTouristSpot/SingleTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MyList from "../pages/MyList/MyList";
import UpdateList from "../pages/MyList/UpdateList";

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
            // element: <SingleTouristSpot></SingleTouristSpot>,
            element: <ProtectedRoute><SingleTouristSpot></SingleTouristSpot></ProtectedRoute>,
            loader: ({params}) => fetch(`https://turismo-server.vercel.app/touristspots/${params.id}`)
        },
        {
           path: '/addtouristspot',
          //  element: <AddTouristSpot></AddTouristSpot>
           element: <AddTouristSpot></AddTouristSpot>
        },
        {
           path: '/alltouristspot',
           element: <AllTouristSpot></AllTouristSpot>
        },
        {
           path: '/mylist',
           element: <MyList></MyList>
        },
        {
           path: '/updatelist/:id',
           element: <UpdateList></UpdateList>,
           loader: ({params}) => fetch(`https://turismo-server.vercel.app/addtouristspot/${params.id}`)
        },
      ],
    },
  ]);

  export default router;