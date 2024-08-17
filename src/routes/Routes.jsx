import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Register from "../Pages/Register";
import AddProducts from "../Pages/AddProducts";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../Pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
      },
      {
        path:"/product-details/:id",
        element: <ProductDetails></ProductDetails>
      }
    ],
  },
]);

export default router;
