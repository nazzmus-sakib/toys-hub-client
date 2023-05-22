import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/register.svg";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateName, logOut, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((res) => {
        updateName(res.user, name, photo)
          .then()
          .catch((err) => console.log(err));
        toast.success("Registation successful");
        logOut();
        navigate("/login");
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
    <div className="hero mb-24 ">
      <Helmet>
        <title>Sign-up | Toy-hub</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
        <div className="text-center lg:text-left">
          <img src={img} alt="" className="mt-10 mb-5 lg:mt-0 lg:mb-5" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  border-2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-2">Sign Up!</h1>
            <form onSubmit={handleRegister}>
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
              <FcGoogle
                className="text-2xl cursor-pointer"
                onClick={handleGoogleLogin}
              ></FcGoogle>
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
