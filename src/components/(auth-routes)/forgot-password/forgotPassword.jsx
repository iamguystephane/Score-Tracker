import { Link } from "react-router-dom";
import NavBar from "../../nav/Nav";

function ForgotPassword() {
  return (
    <div>
      <NavBar />
      <div className="w-full h-screen flex items-center justify-center text-white bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image_3.jpg)] bg-ccenter bg-cover">
        <div className="rounded-lg p-8 shadow-lg bg-transparent backdrop-blur-lg xsm:w-[95%] md:w-2/3 lg:w-[45%]">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p>Fill in the information below to reset your password</p>
          <form>
            <div>
              <label>Email</label>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  className="border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600"
                  placeholder="Enter your email"
                  name="email"
                />
                <button className="w-50 mt-2 py-2 cursor-pointer rounded-lg bg-gray-500 border-black border text-white transition-all duration-300 ease-in-out hover:bg-gray-600 shadow-lg">
                  Send OTP
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label>OTP</label>
              <input
                type="text"
                className={`border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600 "
                }`}
                placeholder="Enter the OTP sent to your email"
                name="otp"
              />
            </div>
            <div className="mt-4">
              <label>New Password</label>
              <input
                type="password"
                className={`border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600 "
                }`}
                placeholder="Enter your new password"
                name="password"
              />

              <div className="w-full flex items-end justify-end">
                <Link to="/login" className="text-yellow-500">
                  Remember password?
                </Link>
              </div>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-yellow-500">
                signup
              </Link>
            </p>
            <button className="mt-5 w-full py-2 cursor-pointer rounded-lg bg-yellow-500 border-black border text-white transition-all duration-300 ease-in-out hover:bg-gray-600 shadow-lg">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
