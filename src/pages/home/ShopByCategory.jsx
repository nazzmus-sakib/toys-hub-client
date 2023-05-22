import React, { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("teddy-bear");
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`https://toys-hub-server.vercel.app/toys-category/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [activeTab]);
  const handleShowDetails = (id) => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };
  return (
    <div className="px-5 lg:px-0">
      <h2 className="lg:text-5xl text-3xl gradient-text text-center mb-10 pb-3">
        Shop By category
      </h2>
      <div className="flex gap-3 flex-wrap">
        <div
          className={`tabBtn lg:px-6 lg:py-3 px-3 py-2 ${
            activeTab === "teddy-bear"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : ""
          }`}
          onClick={() => setActiveTab("teddy-bear")}
        >
          Teddy Bear Toys
        </div>
        <div
          className={`tabBtn lg:px-6 lg:py-3 px-3 py-2 ${
            activeTab === "horse"
              ? " bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
              : ""
          }`}
          onClick={() => setActiveTab("horse")}
        >
          Horse Toys
        </div>
        <div
          className={`tabBtn lg:px-6 lg:py-3 px-3 py-2 ${
            activeTab === "dogs"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : ""
          }`}
          onClick={() => setActiveTab("dogs")}
        >
          Dog Toys
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
        {categoryData.map((category) => {
          const { toyName, price, rating, photo, _id } = category;
          return (
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="card card-compact min-w-96 bg-base-100 shadow-xl "
            >
              <figure>
                <img src={photo} alt="Shoes" className="h-[250px] w-full" />
              </figure>
              <div className="p-5 relative">
                <h2 className="card-title text-2xl">{toyName}</h2>
                <div className="flex items-center justify-between py-3">
                  <p
                    className="gradient-text text-lg 
                "
                  >
                    Price: ${price}
                  </p>
                  <p className="flex items-center gap-1">
                    <Rating
                      placeholderRating={rating}
                      readonly
                      emptySymbol={<FaRegStar className="text-lg"></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-500 text-lg"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    />
                    <span className="font-semibold">{rating}</span>
                  </p>
                </div>

                <div className="flex  items-center justify-between pt-3 mt-auto">
                  <FaArrowRight className="text-red-500 text-xl "></FaArrowRight>
                  <Link to={`/details/${_id}`}>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleShowDetails(_id)}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
