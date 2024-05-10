import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../ReactHooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ReactDatePicker from "react-datepicker";

const SingleFoodDetails = () => {
  const { user } = useAuth();
  const food = useLoaderData();
  const [requestDate, setRequestDate] = useState(new Date());
  const {
    foodName,
    foodImage,
    foodQuantity,
    expired_datetime,
    additionalNotes,
    pickupLocation,
    donatorEmail,
    donatorName,
    _id,
  } = food;

  const handleRequest = (e) => {
    e.preventDefault();
    // if (user?.email === donatorEmail) {
    //   return toast.error("Action not permited");
    // }
    const form = e.target;
    const additionalNotes = form.additionalNotes.value;
    const amount = form.amount.value;
    console.log(additionalNotes, amount);
    const foodReq = {
      foodName,
      foodImage,
      _id,
      donatorEmail,
      donatorName,
      loggedEmail: user?.email,
      requestDate,
    };
    console.log(requestDate);
  };

  return (
    <div className="card w-4/5 h-96   mx-auto card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img className="h-full" src={foodImage} alt="Movie" />
      </figure>
      <div className="w-1/2 space-y-3 h-full flex flex-col items-center justify-center">
        <h2 className="card-title text-3xl font-semibold">{foodName}</h2>
        <p className="text-xl">Food Quantify : {foodQuantity}</p>
        <p>Donar Name: {user.displayName}</p>
        <p>Expired Date : {expired_datetime.slice(0, 10)}</p>

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
                        defaultValue={expired_datetime.slice(0, 10)}
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
                        placeholder="Donation Amount"
                        className="input input-bordered  w-full"
                      />
                    </label>
                  </div>
                </div>
                <input
                  className="btn w-full text-lg uppercase  text-white text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700"
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
    </div>
  );
};

export default SingleFoodDetails;
