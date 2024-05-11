import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const FoodCard = ({ food }) => {
  const {
    foodName,
    donator_name,
    foodQuantity,
    deadline,

    pickupLocation,
    foodImage,
    _id,
  } = food;

  // const newFood = {
  //   foodName,
  //   foodImage,
  //   foodQuantity,
  //   pickupLocation,
  //   deadline,
  //   additionalNotes,
  //   donatorEmail,
  //   donatorName,
  //   donatorImage,
  // };

  return (
    <div>
      <div className="max-w-sm mt-10 mx-auto shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
        {/* <div className="relative">
          <img className="h-60 w-full rounded-t-lg" src={image} alt="" />
          <p>{stock}</p>
        </div> */}
        <div className="">
          <img className="h-60 w-full " src={foodImage} alt="" />
          {/* {stock === "In stock" ? (
            <p className="absolute top-3 right-3 bg-red-500 uppercase rounded-md px-2 py-1 text-white font-semibold">
              {stock}
            </p>
          ) : (
            <p className="absolute top-3 right-3 bg-yellow-500 uppercase rounded-md px-2 py-1 text-white font-semibold">
              {stock}
            </p>
          )} */}
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {foodName}
            </h5>
            <h1 className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xl font-semibold py-2">
              {donator_name}
            </h1>
          </div>

          <div className="flex  items-center gap-10 mb-5 mt-5">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <FaSackDollar className="text-xl font-bold" />
              <p className=""> {foodQuantity}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-yellow-500">
              <FaStar className=" text-xl font-bold" />
              <p className=""> {deadline.slice(0, 10)}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-red-500">
              <IoTime className=" text-xl font-bold" />
              <p className=""> {pickupLocation} (hr)</p>
            </div>
          </div>

          <Link
            to={`/food/${_id}`}
            className="inline-flex items-center w-full justify-center  font-medium text-center text-white text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700 focus:ring-4 focus:outline-none rounded-md focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-3"
          >
            <button className="font-semibold text-lg">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
