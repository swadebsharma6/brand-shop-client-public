
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import About from '../Pages/About/About';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Category from '../Pages/Home/Category/Category';
import Home from '../Pages/Home/Home';
import ItemDetails from '../Pages/ItemDetails/ItemDetails';
import Login from '../Pages/Login/Login';
import MyCart from '../Pages/MyCart/MyCart';
import Register from '../Pages/Register/Register';
import PrivetRoute from '../SecrectRoute/PrivetRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: ':id',
                element: <ItemDetails></ItemDetails>
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