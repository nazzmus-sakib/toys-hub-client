import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/register.svg";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div className="hero mb-24 ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-40">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  border-2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-2">Sign Up!</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary outline-0 border-0">
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-md">Or Sign Up with</p>
            <div className="flex justify-center gap-5 mt-4">
              <FcGoogle className="text-2xl"></FcGoogle>
            </div>
            <p className="text-center mt-5 text-sm">
              Already have an account?
              <Link
                className="text-primary hover:underline underline-offset-4 "
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
