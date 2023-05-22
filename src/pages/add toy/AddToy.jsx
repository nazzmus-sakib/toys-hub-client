import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const form = event.target;
    const toyName = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toysInfo = {
      sellerName,
      sellerEmail,
      toyName,
      category,
      price,
      photo,
      rating,
      quantity,
      description,
    };
    fetch("https://toys-hub-server.vercel.app/toys-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Great!",
            text: "Toy has been successfully added",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <form class="lg:px-28 px-5 py-16" onSubmit={handleSubmit}>
      <div className="lg:flex gap-5 my-4">
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Toy Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            class="input input-bordered w-full"
            required
          />
        </div>
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            class="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="lg:flex gap-5 my-4">
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Category</span>
          </label>
          <select
            className="select select-bordered w-full "
            required
            name="category"
          >
            <option disabled selected>
              Select category
            </option>
            <option value="teddy-bear">Teddy bear</option>
            <option value="dogs">Dogs</option>
            <option value="horse">Horse</option>
          </select>
        </div>
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            class="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="lg:flex gap-5 my-4">
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Rating</span>
          </label>
          <input
            required
            name="rating"
            type="text"
            placeholder="Ratings"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control lg:w-1/2 w-full">
          <label class="label">
            <span class="label-text">Available quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            required
            placeholder="Available quantity"
            class="input input-bordered"
          />
        </div>
      </div>
      <div className="lg:flex gap-5 my-4">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <input
            required
            type="text"
            name="description"
            placeholder="Description"
            class="input input-bordered input-lg py-16"
          />
        </div>
      </div>
      <div class="form-control mt-4">
        <button class="btn btn-primary" type="submit">
          Add toy
        </button>
      </div>
    </form>
  );
};

export default AddToy;
