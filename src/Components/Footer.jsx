import { NavLink } from "react-router-dom";

import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-gray-800 py-10">
          <div className="flex flex-col items-center justify-center text-white">
              <div>
                <img className="h-24 w-24" src={logo} alt="" />
              </div>
              <h2 className="text-3xl font-bold">
                Filter<span className="text-purple-500">Fusion</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 text-center font-semibold my-2 gap-1 md:gap-5">
                <h2><NavLink to={`/`}>All Products</NavLink></h2>
                <h2><NavLink to={`/add-product`}>Add Articles</NavLink></h2>
                <h2><NavLink to={`/login`}>Login</NavLink></h2>
                <h2><NavLink to={`/register`}>Register</NavLink></h2>
              </div>
              <p className="font-semibold mb-1">Providing reliable since since 1992</p>
              <p className="text-sm">Copyright © 2024 - All right reserved</p>
          </div>
        </div>
    );
};

export default Footer;