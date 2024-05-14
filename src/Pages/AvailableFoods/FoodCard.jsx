import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcExpired } from "react-icons/fc";

const FoodCard = ({ food }) => {
  const {
    foodName,
    foodImage,
    donatorName,
    donatorImage,

    foodQuantity,
    pickupLocation,
    deadline,
    additionalNotes,

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
    <div className="mx-auto">
      <div className="max-w-sm mt-10 md:mx-auto shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-3">
        <div className="">
          <img className="h-60 w-full " src={foodImage} alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {foodName}
            </h5>
            <p>{additionalNotes.slice(0, 80)}...</p>
            {/* <h1 className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xl font-semibold py-2">
              {donatorName}
            </h1> */}
          </div>
          <div className="flex items-center gap-5 mt-3">
            <img className="w-12 h-12 rounded-full" src={donatorImage} alt="" />
            <h1 className="text-xl font-semibold">{donatorName}</h1>
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <MdProductionQuantityLimits className="text-2xl font-bold" />
              <p className="text-xl"> {foodQuantity}</p>
            </div>
          </div>

          <div className="md:flex items-center gap-10 my-4">
            <div className="flex items-center gap-2 font-semibold text-yellow-600">
              <FcExpired className=" text-xl font-bold" />
              <p className=""> {deadline.slice(0, 10)}</p>
            </div>

            <div className="flex items-center gap-2 text-blue-500 font-semibold">
              <FaLocationDot className=" text-xl font-bold" />
              <p className=""> {pickupLocation}</p>
            </div>
          </div>
          <div> </div>

          <Link
            to={`/food/${_id}`}
            className="inline-flex items-center w-full justify-center  font-medium text-center text-white text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700 focus:ring-4 focus:outline-none rounded-md focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-3"
          >
            <button className="font-semibold md:text-lg">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
