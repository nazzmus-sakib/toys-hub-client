import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/error.svg";
import { FcHome } from "react-icons/fc";
const Error = () => {
  return (
    <section className="flex items-center h-screen p-16  text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={img} alt="" className="h-full max-h-[400px]" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600"></h2>
          {/* <p className="text-2xl font-semibold md:text-3xl mb-8">
            Page Not Found
          </p> */}
          <Link to="/" className="flex items-center gap-1 btn btn-outline">
            <FcHome className="text-2xl" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
