import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
        <section className="my-12">
        <div className="h-52 flex justify-center items-center bg-gradient-to-r from-orange-100 to-indigo-300 mb-5">
        <div className="text-center">
          <h3 className="text-4xl text-center mb-5 font-bold text-secondary underline">
            About Us
          </h3>
          <Link className="font-bold text-primary mr-5" to="/">
            Home
          </Link>
          <Link className="font-bold text-primary" to="/about">
            About
          </Link>
        </div>
      </div>
        </section>
        </div>
    );
};

export default Banner;