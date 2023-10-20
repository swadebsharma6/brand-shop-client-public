
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import About from '../Pages/About/About';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Category from '../Pages/Home/Category/Category';
import ProductDetails from '../Pages/Home/Category/ProductDetails';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyCart from '../Pages/MyCart/MyCart';
import Register from '../Pages/Register/Register';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import PrivetRoute from '../SecrectRoute/PrivetRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ()=> fetch(`http://localhost:5000/products`)
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
              
            },
            {
                path: '/about',
                element: <PrivetRoute><About></About></PrivetRoute>
            },
            {
                path: '/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'update',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;