import React from "react";
import img from "../../assets/logo.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={img} className="h-24" alt="" />
        <p>
          Toys Hub Ltd.
          <br />
          Providing Qualityful sports toy since 2017
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
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
