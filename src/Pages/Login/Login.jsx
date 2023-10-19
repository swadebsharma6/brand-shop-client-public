import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {user, signInUser, googleLogin} = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const handleGoogle =()=>{
        googleLogin()
        .then(result =>{
          const user = result.user;
          setSuccess('User Logged Successfully.');
          navigate('/')
          toast.success('Login Successfully!')
          console.log('google user', user)
        })
        .catch(error =>{
          setError(error.message)
        })
      }
    
        

  
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
          // reset error and success
          setSuccess('');
          setError('');

          if(user.reloadUserInfo.email !== email){
            return setError('Your Email is Not Matched')
          }

        // sign In user
        signInUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log('signIn in User', user);
            setSuccess('User Logged Successfully.');
          navigate('/');
          toast.success('login Successfully!')
          form.reset()
        })
        .catch(error =>{
            setError(error.message)
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
                    <div>
                    <p className="mt-3 text-primary font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">{success && success}</p>
                    <p className="mt-3 text-red-700 font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">{error && error}</p>
                    </div>

                    <label className="label">
                        New to this Website? <Link to="/register" className="label-text-alt text-primary font-semibold link link-hover">Create an account</Link>
                    </label>
                    
                </form>
                <div className="text-center pb-4">
                <button onClick={handleGoogle}  className="btn btn-primary">
                <FcGoogle className="text-xl"></FcGoogle>
                Sign in Google</button>
              </div>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Login;