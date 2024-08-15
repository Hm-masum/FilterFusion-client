import { FaGithub, FaGoogle } from "react-icons/fa";
import logo from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center px-3 md:px-24">
      <div className="md:w-1/2">
        <img className="w-[600px] md:h-[600px]" src={logo} alt="" />
      </div>

      <div className="md:w-1/2 px-2 md:px-14 space-y-4">
        <h2 className="text-4xl font-semibold text-center pb-3">
          Login Please!
        </h2>

        <form>
          <div className="space-y-4">
            <div>
              <label className="block mb text-sm">Email Address</label>
              <div className="mt-2 relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block mb text-sm">Password</label>
              <div className="mt-2 relative">
                <input
                  type="name"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                  className="w-full p-3 border rounded-md border-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-purple-700 font-semibold w-full rounded-md text-center py-3 text-white"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>

        <div>
          <p className="text-lg">
            Are you new ?{" "}
            <Link className="font-semibold text-purple-600" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </div>

        <h2 className="text-center mt-3 font-semibold">
          --------Login with social accounts--------
        </h2>

        <div className="flex justify-center gap-2">
          <button
            // onClick={handleGoogleSignIn}
            className="bg-purple-700 font-semibold w-full rounded-md py-3 text-white flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-xl" /> Google
          </button>

          <button
            // onClick={handleGithubSignIn}
            className="bg-purple-700 font-semibold w-full rounded-md  py-3 text-white flex items-center justify-center gap-2"
          >
            <FaGithub className="text-xl" /> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
