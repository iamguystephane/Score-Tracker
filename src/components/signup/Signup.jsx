import { Link } from "react-router-dom";
import NavBar from "../nav/Nav";

function Signup() {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen flex items-center justify-center my-10">
        <div className="rounded-lg p-8 shadow-lg xsm:w-[95%] md:w-2/3 lg:w-[45%]">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p>
            Create your account to get started with our score tracking system
          </p>
          <form className="">
            <div className="flex items-center gap-3 mt-4">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  className="border px-3 py-2 rounded-lg w-full mt-2 mb-4 focus:outline-yellow-600"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  className="border px-3 py-2 rounded-lg w-full mt-2 mb-4 focus:outline-yellow-600"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                className="border px-3 py-2 rounded-lg w-full mt-2 mb-4 focus:outline-yellow-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Role</label>
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 focus:outline-yellow-600">
                <option value='student'>Student</option>
                <option value='lecturer'>Lecturer</option>
                <option value='admin'>Admin</option>
              </select>
            </div>
            <div>
              <label>Level</label>
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 focus:outline-yellow-600">
                <option value='level-one'>Level One</option>
                <option value='level-two'>Level Two</option>
                <option value='degree'>Degree</option>
              </select>
            </div>
            <div>
              <label>Department</label>
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 focus:outline-yellow-600">
                <option value='swe'>Software Engineering</option>
                <option value='bfi'>Banking and Finance</option>
                <option value='pm'>Project Management</option>
              </select>
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
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-600">
                login
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

export default Signup;
