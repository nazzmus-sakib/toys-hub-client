import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toyData = useLoaderData();
  const navigate = useNavigate();
  const [singleToy, setSingleToy] = useState(toyData);
  const { toyName, photo, quantity, description, price, _id } = singleToy;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.name.value;
    const price = parseInt(form.price.value);
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateInfo = {
      toyName,
      price,
      photo,
      quantity,
      description,
    };
    fetch(`https://toys-hub-server.vercel.app/update-toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Great!",
            text: "Toy has been updated successfully ",
            icon: "success",
            confirmButtonText: "ok",
          });
          form.reset();
          navigate("/my-toys");
        }
      });
  };

  return (
    <div className="card-body">
      <Helmet>
        <title>Update-toy | Toy-hub</title>
      </Helmet>
      <h2 className="text-4xl text-center my-10 gradient-text pb-2">
        Update Toy
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="lg:flex  gap-10 ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={toyName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="lg:flex  gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              name="quantity"
              type="text"
              defaultValue={quantity}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
              name="photo"
              defaultValue={photo}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            className="input input-bordered py-20"
          />
        </div>
        <div className="text-right mt-3">
          <button className="btn btn-primary" type="submit">
            Update toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;
