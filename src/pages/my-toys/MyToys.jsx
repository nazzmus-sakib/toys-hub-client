import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import UpdateToys from "./UpdateToys";

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

              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((toy, index) => {
              const {
                toyName,
                category,
                price,
                quantity,
                _id,
                photo,
                description,
              } = toy;
              return (
                <tr>
                  <th className="z-0">{index + 1}</th>

                  <td>{toyName}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td>
                    <Link to={`/update-toy/${_id}`}>
                      <label htmlFor="my-modal-5" className="btn btn-xs mr-3">
                        Edit
                      </label>
                    </Link>

                    <Link>
                      <button className="btn btn-xs">Delete</button>
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
