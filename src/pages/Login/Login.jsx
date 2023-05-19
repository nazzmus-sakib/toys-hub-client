import React, { useContext } from "react";
import img from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      toast.success("Login success");
      navigate("/");
    });
  };
  return (
    <div className="hero mb-24 mt-5 ">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  border-2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary  outline-0 border-0">
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="text-center mt-3 text-md">Or Login with</p>
              <div className="flex justify-center gap-5 mt-4">
                <FcGoogle
                  className="text-2xl cursor-pointer"
                  onClick={handleGoogleLogin}
                ></FcGoogle>
              </div>
              <p className="text-center mt-5 text-sm">
                New to toys Hub?{" "}
                <Link
                  className="text-primary hover:underline underline-offset-4"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
