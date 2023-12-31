import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link to="/all-toys">All toys</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/my-toys">My Toys</Link>
          </li>
          <li>
            <Link to="/add-toy">Add a toy</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 z-10  shadow-lg lg:px-0 px-2 py-3 sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case items-center h-24" to="/">
          <img src={logo} className="h-20" />
          <h2 className="text-xl lg:text-3xl font-bold lg:ml-4 ml-2">
            Toys Hub
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <div
            className="tooltip tooltip-left tooltip-warning mr-5"
            data-tip={user?.displayName}
          >
            <div className="avatar online ">
              <div className="w-12 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
        ) : (
          <FaUserCircle className="lg:text-5xl text-4xl mr-2"></FaUserCircle>
        )}
      </div>
    </div>
  );
};

export default Navbar;
