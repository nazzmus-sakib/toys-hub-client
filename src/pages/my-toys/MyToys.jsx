import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import UpdateToys from "./UpdateToys";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`https://toys-hub-server.vercel.app/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-hub-server.vercel.app/delete-toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  const handleLowToHigh = () => {
    fetch(`https://toys-hub-server.vercel.app/low-to-high?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  const handleHighToLow = () => {
    fetch(`https://toys-hub-server.vercel.app/high-to-low?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  return (
    <div className="my-20">
      <Helmet>
        <title>My-toy | Toy-hub</title>
      </Helmet>
      <div className="mb-7 flex justify-end gap-3 px-5 lg:px-0">
        <button className="btn btn-outline" onClick={handleLowToHigh}>
          See low to high
        </button>
        <button className="btn btn-outline" onClick={handleHighToLow}>
          See high to low
        </button>
      </div>
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
                      <button
                        className="btn btn-xs"
                        onClick={() => handleDelete(_id)}
                      >
                        Delete
                      </button>
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
