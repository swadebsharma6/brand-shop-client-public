import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // sign In user
        signInUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log('signIn in User', user)
        })
        .catch(error =>{
            console.log(error.message)
        })
        
    }
        

    


    return (
        <section>
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:ml-8 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 p-0">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <label className="label">
                        New to this Website? <Link to="/register" className="label-text-alt text-primary font-semibold link link-hover">Create an account</Link>
                    </label>
                    
                </form>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Login;