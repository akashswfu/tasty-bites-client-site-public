import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../ReactHooks/useAuth";
import ReactDatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate = useNavigate();

  const { user } = useAuth();

  const [startDate, setStartDate] = useState(new Date());
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expired_datetime = startDate;
    const additionalNotes = form.additionalNotes.value;
    const donatorEmail = user?.email;
    const donatorName = user?.displayName;
    const donatorImage = user?.photoURL;

    const updateFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expired_datetime,
      additionalNotes,
      donatorEmail,
      donatorName,
      donatorImage,
    };

    try {
      const { data } = await axios.put(
        `http://localhost:5000/food/${food._id}`,
        updateFood
      );
      navigate("/manageMyFood");
      toast.success("Food Updated Successfully");

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="md:p-24 p-5 bg-gray-100">
      {/* <h2 className="text-center text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text  text-4xl font-bold md:pb-16 my-10 md:my-0 uppercase">
        Add a New Food
      </h2> */}
      <div className="flex flex-col justify-center items-center space-y-3 mb-10">
        <img className="rounded-full w-40" src={user.photoURL} alt="" />
        <h1 className="text-2xl font-bold">Donar Name : {user.displayName}</h1>
        <p>Donar Email: {user.email}</p>
      </div>
      <form onSubmit={handleUpdate}>
        {/* foodname and foodImage row  */}
        <div className="md:flex w-full  gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Food Name"
                name="foodName"
                className="input input-bordered w-full"
                required
                defaultValue={food.foodName}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodImage"
                placeholder="Food Image"
                className="input input-bordered  w-full"
                required
                defaultValue={food.foodImage}
              />
            </label>
          </div>
        </div>

        {/* food Quantity and PickUp Location row  */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Food Quantity"
                name="foodQuantity"
                className="input input-bordered w-full"
                required
                defaultValue={food.foodQuantity}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Location"
                className="input input-bordered  w-full"
                required
                defaultValue={food.pickupLocation}
              />
            </label>
          </div>
        </div>

        {/* expdata  and additionalNote row  */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="text-gray-700 label">Deadline</label>

            <ReactDatePicker
              className="border input input-bordered rounded-md w-full"
              selected={startDate}
              defaultValue={food.startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Additional Notes</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="additionalNotes"
                placeholder="Additional Notes"
                className="input input-bordered  w-full"
                required
                defaultValue={food.additionalNotes}
              />
            </label>
          </div>
        </div>
        {/* Food Status  and donator name */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <h1 className="text-xl font-semibold">Status: Available</h1>
          {/* <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Processing Time (hr)</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Processing Time"
                name="processing"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div> */}
        </div>

        {/* user email and name  */}

        <input
          className="btn w-full text-lg uppercase  text-white text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700"
          type="submit"
          value="Update Food"
        />
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateFood;