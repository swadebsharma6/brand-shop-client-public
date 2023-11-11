import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Main;