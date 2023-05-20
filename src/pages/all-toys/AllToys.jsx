import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  useEffect(() => {
    fetch("https://toys-hub-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);
  return (
    <div className="overflow-x-auto my-20">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toysData.map((toy, index) => {
            const { sellerName, toyName, category, price, quantity, _id } = toy;
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <Link to={`/details/${_id}`}>
                    <button className="btn btn-xs">Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
