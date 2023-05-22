import React from "react";
import img from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={img} className="h-24" alt="" />
        <p>
          Toys Hub Ltd.
          <br />
          &copy; All right reserved by Toy-hub ltd.
        </p>
      </div>
      <div>
        <span className="footer-title">Contact Info</span>
        <p className=" flex items-center gap-2">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/phone.png"
            alt="phone"
          />{" "}
          <span> +880 1234567891</span>
        </p>
        <p className=" flex items-center gap-2">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/gmail--v1.png"
            alt="gmail-new"
          />{" "}
          <span>info@toyshub.com</span>
        </p>
        <p className=" flex items-center gap-2">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/telegram-app--v1.png"
            alt="phone"
          />{" "}
          <span> @toys-hub18</span>
        </p>
        <p className=" flex items-center gap-2">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="phone"
          />{" "}
          <span> @toys-hub-official</span>
        </p>
      </div>
      <div>
        <span className="footer-title">Our Address</span>
        <p className="">Level-76, 14, Alal Market, Gulshan, Dhaka</p>
        <p className="link link-hover">
          <span className="font-bold">Open:</span> (Sun - Thu, 10:00 AM to 6:00
          PM)
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="flex gap-2">
          <Link to="https://github.com/ProgrammingHero1">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/github--v1.png"
              alt="github--v1"
            />
          </Link>
          <Link to="https://bd.linkedin.com/company/programminghero">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin-2--v1"
            />
          </Link>
          <Link to="https://web.facebook.com/programmingHero">
            {" "}
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="facebook-new"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
