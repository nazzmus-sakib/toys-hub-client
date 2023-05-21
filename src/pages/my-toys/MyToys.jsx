import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, []);
  return (
    <div className="my-20">
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
            {myToys?.map((toy, index) => {
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
                    <Link>
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

export default MyToys;
