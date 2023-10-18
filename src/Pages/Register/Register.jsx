import { Link } from "react-router-dom";


const Register = () => {
    return (
        <section>
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col  lg:flex-row-reverse">
            <div className="text-center lg:ml-8 lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sit vero velit porro recusandae voluptate quaerat dicta eum, ducimus unde.</p>
             </div>
             
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" placeholder="image url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6 p-0">
                        <button type="submit" className="btn btn-secondary">Register</button>
                    </div>
                    <label className="label">
                        Already have an account? <Link to="/login" className="label-text-alt text-primary font-semibold link link-hover">Please Login</Link>
                    </label>
                    
                </form>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Register;