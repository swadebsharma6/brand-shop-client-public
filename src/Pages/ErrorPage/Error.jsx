import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen flex justify-center items-center">
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-4xl font-bold">Page Not Found</h2>
                <h1 className="text-7xl font-bold text-red-700">404</h1>
                <p><Link className="text-primary text-xl font-bold underline" to='/'>Go Home</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Error;