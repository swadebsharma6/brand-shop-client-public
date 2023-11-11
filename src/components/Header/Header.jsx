import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Header = () => {

  const {user, logOutUser} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOutUser()
    .then(()=>{
      toast.success('User LogOut Successfully!')
    })
    .catch(error =>{
      console.log(error.message)
    })
  }
 


    const navLinks = <>
    <li> <NavLink
    to="/"
    className={({ isActive, }) => isActive ? "font-bold  text-orange-500" : ""}> Home
   </NavLink> </li>
   <li> <NavLink
   to="/about"
   className={({ isActive, }) => isActive ? "font-bold text-orange-500" : ""}> About
  </NavLink> </li>
    <li><NavLink
    to="/add"
    className={({ isActive, }) => isActive ? "font-bold text-orange-500" : ""}> Add Product
   </NavLink> </li>
  <li>  <NavLink
  to="/cart"
  className={({ isActive, }) => isActive ? "font-bold text-orange-500" : ""}> My Cart
 </NavLink></li> 

    
    </>


    return (
        <section className=" bg-sky-600 text-white py-6">
        <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-2xl">SM Tech Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold  menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <span className="font-bold">{user && user.displayName}</span>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
         <div className="w-10 rounded-full">
          
             { user && <img src={user.photoURL} alt="" />}
          
        </div>
      </label>

      {
        user
         ? <button onClick={handleLogOut} className="btn btn-sm btn-secondary">Sign Out</button>
         : 
         <Link to='/login'><button className="btn btn-sm btn-primary">Login</button></Link>
      }

        </div>
      </div>
        </section>
    );
};

export default Header;  