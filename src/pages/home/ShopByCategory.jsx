import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("teddy-bear");
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/toys-category/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [activeTab]);
  const handleShowDetails = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="text-5xl gradient-text text-center mb-10 pb-3">
        Shop By category
      </h2>
      <div className="flex gap-3">
        <div
          className={`tabBtn ${
            activeTab === "teddy-bear"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : ""
          }`}
          onClick={() => setActiveTab("teddy-bear")}
        >
          Teddy Bear Toys
        </div>
        <div
          className={`tabBtn  ${
            activeTab === "horse"
              ? " bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
              : ""
          }`}
          onClick={() => setActiveTab("horse")}
        >
          Horse Toys
        </div>
        <div
          className={`tabBtn ${
            activeTab === "dogs"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : ""
          }`}
          onClick={() => setActiveTab("dogs")}
        >
          Dog Toys
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {categoryData.map((category) => {
          const { toyName, price, rating, photo, _id } = category;
          return (
            <div className="card card-compact min-w-96 bg-base-100 shadow-xl ">
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