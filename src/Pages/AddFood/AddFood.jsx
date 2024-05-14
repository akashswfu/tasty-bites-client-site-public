import { useState } from "react";
import useAuth from "../../ReactHooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = parseInt(form.foodQuantity.value);
    const pickupLocation = form.pickupLocation.value;
    const deadline = startDate;
    const additionalNotes = form.additionalNotes.value;
    const donatorEmail = user?.email;
    const donatorName = user?.displayName;
    const donatorImage = user?.photoURL;

    const newFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      deadline,
      additionalNotes,
      donatorEmail,
      donatorName,
      donatorImage,
    };
    console.log(newFood);

    try {
      const { data } = await axios.post(
        "https://tasty-bites-server-site.vercel.app/food",
        newFood,
        {
          withCredentials: true,
        }
      );
      toast.success("Food Added Successfully");
      setTimeout(() => {
        navigate("/manageMyFood");
      }, 500);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="md:p-24 p-5 bg-gray-100 ">
      <Helmet>
        <title>TastyBites | Add Food</title>
        {/* <link rel="canonical" href="" /> */}
      </Helmet>

      <div className="flex flex-col justify-center items-center space-y-3 mb-10">
        <img
          className="rounded-full md:w-40 md:h-40 w-32 h-32 "
          src={user.photoURL}
          alt=""
        />
        <h1 className="md:text-2xl font-bold">
          Donar Name : {user.displayName}
        </h1>
        <p>Donar Email: {user.email}</p>
      </div>
      <form onSubmit={handleAddFood}>
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
              />
            </label>
          </div>
        </div>

        {/* expdata  and additionalNote row  */}

        <div className="md:flex items-center gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="text-gray-700 label">Deadline</label>

            <ReactDatePicker
              className="border input input-bordered rounded-md w-full"
              selected={startDate}
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
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Food Status</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="foodAvailable"
              placeholder="food avaiable"
              className="input input-bordered  w-full text-green-500"
              readOnly
              defaultValue={"Available"}
            />
          </label>
        </div>

        {/* user email and name  */}

        <input
          className="btn w-full text-lg uppercase mt-16  text-white text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700"
          type="submit"
          value="Add Item"
        />
      </form>
      <Toaster />
    </div>
  );
};

export default AddFood;
