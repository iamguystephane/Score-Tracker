import { Link } from "react-router-dom";
import NavBar from "../../nav/Nav";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const errMsgs = {
      email: "",
      password: "",
    };

    if (!formData.email) {
      errMsgs.email = "Email is required";
    }

    if (!formData.password) {
      errMsgs.password = "Password is required";
    }
    setErrors(errMsgs);
  }

  return (
    <div>
      <NavBar />
      <div className="w-full h-screen flex items-center justify-center bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image.jpg)] bg-center bg-cover">
        <div className="rounded-lg p-8 shadow-lg xsm:w-[95%] md:w-2/3 lg:w-[45%] backdrop-blur-lg text-white">
          <h1 className="text-3xl font-bold">Log into your account</h1>
          <p>Fill in the information below to join our score tracking system</p>
          <form className="" onSubmit={handleOnSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                className={`border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600 ${
                  errors.email && "border-red-500"
                }`}
                placeholder="Enter your email"
                name="email"
                onChange={handleOnChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input
                type="password"
                className={`border px-3 py-2 rounded-lg w-full mt-2 focus:outline-yellow-600 ${
                  errors.password && "border-red-500"
                }`}
                placeholder="Enter your password"
                name="password"
                onChange={handleOnChange}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
              <div className="w-full flex items-end justify-end">
                <Link to="/forgot-password" className="text-gray-900">
                  Forgot password?
                </Link>
              </div>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-gray-900">
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
