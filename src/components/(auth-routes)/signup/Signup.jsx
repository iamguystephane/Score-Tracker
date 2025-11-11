import { Link } from "react-router-dom";
import NavBar from "../../nav/Nav";

function Signup() {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen flex items-center justify-center py-10 bg-[url(https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/469692484_122148057866335691_7370190195268317446_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfZ0UyBY_ixTnmQUI4ZYNUQz_lyE1z2v9DP-XITXPa_9CH0fx89G6LpoqE7Of9hXUpSasXwvZGveKie3jdsx5C&_nc_ohc=XGWXZGoX3cIQ7kNvwHfUrxB&_nc_oc=AdkvHfHK1m4R52msiNtEHtzsRIEcC7BVuUL7v2I0MphY53Ql7mNvGMPmh-4WBGQpVec&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=nt8Js2atMiWOFbqyzSF8hA&oh=00_AfgLtzWNdVHMtlE_-oBPg0ok7ksaZ3uf2Mku5FrQPyajqA&oe=6918D8F8)] bg-no-repeat text-white bg-center bg-cover">
        <div className="rounded-lg p-8 shadow-lg xsm:w-[95%] md:w-2/3 lg:w-[45%] backdrop-blur-xl">
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
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 border-white focus:outline-yellow-600">
                <option value="student" className="text-black">
                  Student
                </option>
                <option value="lecturer" className="text-black">
                  Lecturer
                </option>
                <option value="admin" className="text-black">
                  Admin
                </option>
              </select>
            </div>
            <div>
              <label>Level</label>
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 focus:outline-yellow-600">
                <option value="level-one" className="text-black">
                  Level One
                </option>
                <option value="level-two" className="text-black">
                  Level Two
                </option>
                <option value="degree" className="text-black">
                  Degree
                </option>
              </select>
            </div>
            <div>
              <label>Department</label>
              <select className="w-full border rounded-lg mt-2 mb-4 px-3 py-2 focus:outline-yellow-600">
                <option value="swe" className="text-black">
                  Software Engineering
                </option>
                <option value="bfi" className="text-black">
                  Banking and Finance
                </option>
                <option value="pm" className="text-black">
                  Project Management
                </option>
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
              Complete Onboarding
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
