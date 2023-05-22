import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const ShowDetails = () => {
  const {
    price,
    rating,
    quantity,
    sellerName,
    sellerEmail,
    photo,
    description,
    toyName,
  } = useLoaderData();

  return (
    <div className="lg:card lg:card-side bg-base-100 my-14">
      <Helmet>
        <title>Details | Toy-hub</title>
      </Helmet>
      <figure className="lg:w-2/5 p-5 lg:p-0">
        <img src={photo} alt="img" className="lg:h-[400px] w-full rounded" />
      </figure>
      <div className="card-body flex-grow-0 lg:w-3/5">
        <h2 className="card-title text-[26px] mb-5">{toyName}</h2>
        <span className="text-lg ">
          <span className="font-bold ">Price:</span> ${price}
        </span>
        <span className="text-lg">
          <span className="font-bold">Quantity:</span> {quantity}
        </span>
        <span className="text-lg">
          <span className="font-bold">Rating:</span> {rating}
        </span>
        <span className="text-lg">
          <span className="font-bold">Description:</span>{" "}
          <span className="text-sm text-gray-500">{description}</span>
        </span>
        <div>
          <h2 className="text-2xl font-bold mb-3">Seller Information</h2>
          <p className="text-lg">
            <span className="font-bold">Seller Name:</span> {sellerName}
          </p>
          <p className="text-lg">
            <span className="font-bold">Seller Email:</span> {sellerEmail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
