
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import About from '../Pages/About/About';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyCart from '../Pages/MyCart/MyCart';

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
                path: '/about',
                element: <About></About>
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
            }
        ]
    }
])

export default routes;