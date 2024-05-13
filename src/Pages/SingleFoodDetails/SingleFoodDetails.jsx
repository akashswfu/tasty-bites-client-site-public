import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../ReactHooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ReactDatePicker from "react-datepicker";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const SingleFoodDetails = () => {
  const { user } = useAuth();
  const food = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [requestDate, setRequestDate] = useState(new Date());
  const {
    foodName,
    foodImage,
    foodQuantity,
    deadline,
    additionalNotes,
    pickupLocation,
    donatorEmail,
    donatorName,
    _id,
  } = food;

  const handleRequest = async (e) => {
    e.preventDefault();
    if (user?.email === donatorEmail) {
      return toast.error("Action not permited");
    }
    const form = e.target;
    const additionalNotes = form.additionalNotes.value;
    const amount = form.amount.value;

    const foodReq = {
      foodName,
      foodImage,
      donatorEmail,
      donatorName,
      loggedEmail: user?.email,
      requestDate,
      pickupLocation,
      deadline,
      additionalNotes,
      amount,
    };
    console.log(foodReq);
    try {
      const { data } = await axiosSecure.post("/foodReq", foodReq);
      if (data.insertedId) {
        toast.success("Request Success");
        try {
          await axiosSecure.delete(`/food/${_id}`);
          navigate("/myFoodReq");
        } catch (err) {
          toast.error(err.message);
        }
      }
      // navigate("/my-bids");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
      e.target.reset();
    }

    // try {
    //   const { data } = await axiosSecure.delete(`/food/${_id}`);
    // } catch (err) {
    //   toast.error(err.message);
    // }
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="card w-4/5 h-96   mx-auto card-side bg-base-100 "
    >
      <Helmet>
        <title>TastyBites | {foodName}</title>
      </Helmet>
      <figure className="w-1/2">
        <img className="h-full" src={foodImage} alt="Movie" />
      </figure>
      <div className="w-1/2 space-y-3 h-full flex flex-col items-center justify-center">
        <h2 className="card-title text-3xl font-semibold">{foodName}</h2>
        <p className="text-xl">Food Quantify : {foodQuantity}</p>
        <p>Donar Name: {user.displayName}</p>
        <p>Expired Date : {deadline.slice(0, 10)}</p>

        {/* Modal section  */}

        {/* The button to open modal */}

        <label htmlFor="my_modal_7" className="btn">
          Requested
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="my_modal_7"
          className="modal-toggle w-full"
        />
        <div className="modal " role="dialog">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="md:p-24 p-5 bg-gray-100">
              {/* <h2 className="text-center text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text  text-4xl font-bold md:pb-16 my-10 md:my-0 uppercase">
        Add a New Food
      </h2> */}

              <form onSubmit={handleRequest}>
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
                        defaultValue={pickupLocation}
                      />
                    </label>
                  </div>
                </div>

                {/* expdata  and additionalNote row  */}

                <div className="md:flex gap-10 justify-center md:mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Expired Date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="foodId"
                        placeholder="FoodId"
                        className="input input-bordered  w-full"
                        readOnly
                        defaultValue={deadline}
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Food Id</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="foodId"
                        placeholder="FoodId"
                        className="input input-bordered  w-full"
                        readOnly
                        defaultValue={_id}
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex gap-10 justify-center md:mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="text-gray-700 label">Request Date</label>

                    <ReactDatePicker
                      className="border input input-bordered rounded-md w-full"
                      selected={requestDate}
                      readOnly
                      // defaultValue={food.startDate}
                      onChange={(date) => setRequestDate(date)}
                    />
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Additional Notes"
                        className="input input-bordered  w-full"
                        readOnly
                        defaultValue={user.email}
                      />
                    </label>
                  </div>
                </div>

                {/* user info  */}
                <div className="md:flex gap-10 justify-center md:mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Food Donar Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Additional Notes"
                        className="input input-bordered  w-full"
                        readOnly
                        defaultValue={donatorEmail}
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Food Donar Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Additional Notes"
                        className="input input-bordered  w-full"
                        readOnly
                        defaultValue={donatorName}
                      />
                    </label>
                  </div>
                </div>
                {/* Additional notes My donation  and donator name */}

                <div className="md:flex gap-10 justify-center md:mb-6">
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
                        defaultValue={additionalNotes}
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Donation Amount</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="amount"
                        required
                        placeholder="Donation Amount"
                        className="input input-bordered  w-full"
                      />
                    </label>
                  </div>
                </div>
                <input
                  className="btn w-full text-lg uppercase  text-white text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700"
                  type="submit"
                  value="Request Food"
                />
              </form>
              <Toaster />
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFoodDetails;
