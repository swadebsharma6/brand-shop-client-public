import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Error from "../Pages/ErrorPage/Error";
import Category from "../Pages/Home/Category/Category";
import ProductDetails from "../Pages/Home/Category/ProductDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivetRoute from "../SecrectRoute/PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/category/:brand",
        element: <Category></Category>,
        loader: ()=> fetch(`https://brand-shop-server-site-ho8eewa3g-swadebsharma6.vercel.app/`)
       
      },
      
      {
        path: "details/:id",
        element: <ProductDetails></ProductDetails>,
       loader: ({params}) => fetch(`https://brand-shop-server-site-ho8eewa3g-swadebsharma6.vercel.app/${params.id}`)
    
      },
      {
        path: "/about",
        element: (
          <PrivetRoute>
            <About></About>
          </PrivetRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`https://brand-shop-server-site-ho8eewa3g-swadebsharma6.vercel.app/${params.id}`)
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
        loader: () => fetch(`https://brand-shop-server-site-ho8eewa3g-swadebsharma6.vercel.app/`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
    errorElement: <Error></Error>
  },
]);

export default routes;
