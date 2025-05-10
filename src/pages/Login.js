import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart, user } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded-lg shadow-md">
          {/* User Profile Section - Only shown when logged in */}
          {user && (
            <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
              <div className="relative">
                {user?.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[rgb(3,163,199)]"
                  />
                ) : (
                  <FaUserCircle className="w-16 h-16 text-gray-400" />
                )}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          )}

          {/* Login Form - Shown when not logged in */}
          {!user && (
            <>
              <div className="flex flex-col items-center mb-6">
                <FaUserCircle className="w-20 h-20 text-[rgb(3,163,199)]" />
                <h2 className="text-2xl font-bold mt-2 text-gray-800">
                  Welcome Back
                </h2>
                <p className="text-gray-600">Please login to continue</p>
              </div>

              <form
                className="pt-2 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label className="block text-gray-700">Email</label>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      className="w-full h-full outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700">Password</label>
                  <div className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={data.password}
                      name="password"
                      onChange={handleOnChange}
                      className="w-full h-full outline-none bg-transparent"
                      required
                    />
                    <button
                      type="button"
                      className="ml-2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword((preve) => !preve)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[rgb(3,163,199)] hover:bg-[rgba(3,163,199,0.83)] text-white py-3 rounded-lg w-full font-medium transition-all mt-4"
                >
                  Login
                </button>
              </form>

              <p className="text-center mt-6 text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="text-[rgb(3,163,199)] font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
