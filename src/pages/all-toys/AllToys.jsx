import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  const [searchText, setSearchText] = useState(null);
  useEffect(() => {
    fetch("https://toys-hub-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearch = () => {
    fetch(`https://toys-hub-server.vercel.app/searchByToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  };
  return (
    <div className="my-20">
      <div className="flex justify-center gap-2 mb-10 px-5">
        <input
          type="text"
          placeholder="search toy"
          className="input input-bordered w-full max-w-xs "
          onChange={handleChange}
        />
        <button
          className="btn btn-outline btn-primary text-center"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto ">
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
              const { sellerName, toyName, category, price, quantity, _id } =
                toy;
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
    </div>
  );
};

export default AllToys;
