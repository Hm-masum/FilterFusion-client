import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const{user,logOut}=useAuth()

    const handleLogout = async()=>{
        await logOut();
        toast.success("Logout successful")
    }

  const navLinks = (
    <>
      <li>
        <NavLink to={`/`}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={`/add-product`}>Add Products</NavLink>
      </li>
      <li>
        <NavLink to={`/login`}>Login</NavLink>
      </li>
      <li>
        <NavLink to={`/register`}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar p-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={`/`} className="text-2xl font-semibold">
          Filter<span className="text-purple-700">fusion</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div>
          {user?
            <button onClick={handleLogout} className="btn bg-purple-700 text-white">Logout</button>
          :
           <Link to={`/login`}>
             <button  className="btn bg-purple-700 text-white">Login</button>
           </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
