import React from "react";
import img from "../../assets/contact.svg";
const Contact = () => {
  return (
    <div className="">
      <h2 className="gradient-text text-5xl text-center mt-10 pb-2">
        Contact with us!
      </h2>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="card flex-shrink-0 w-1/2">
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="text"
                placeholder="Message"
                className="input input-bordered py-14"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
