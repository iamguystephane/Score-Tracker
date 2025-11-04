import { Link } from "react-router-dom";
import NavBar from "../nav/Nav";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="w-full h-[85vh] flex items-center justify-center">
        <div className="rounded-lg p-8 shadow-lg xsm:w-[95%] md:w-2/3 lg:w-1/3">
          <h1 className="text-3xl font-bold">Log into your account</h1>
          <p>Fill in the information below to join our score tracking system</p>
          <form className="">
            <div>
              <label>Email</label>
              <input
                type="email"
                className="border px-3 py-2 rounded-lg w-full mt-2 mb-4 focus:outline-yellow-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                className="border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600"
                placeholder="Enter your password"
              />
              <div className="w-full flex items-end justify-end">
                <Link to="/forgot-password" className="text-yellow-600">
                  Forgot password?
                </Link>
              </div>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-yellow-600">
                signup
              </Link>
            </p>
            <button className="mt-5 w-full py-2 cursor-pointer rounded-lg bg-yellow-500 border-black border text-white transition-all duration-300 ease-in-out hover:bg-gray-600 shadow-lg">
                Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
