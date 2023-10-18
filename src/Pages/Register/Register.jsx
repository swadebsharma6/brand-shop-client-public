import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        // create user
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('createdUser', user);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <section>
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col  lg:flex-row-reverse">
            <div className="text-center lg:ml-8 lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sit vero velit porro recusandae voluptate quaerat dicta eum, ducimus unde.</p>
             </div>
             
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="image url" className="input input-bordered" />
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