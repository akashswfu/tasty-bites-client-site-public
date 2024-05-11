import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import useAuth from "../../ReactHooks/useAuth";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    const getFood = async () => {
      const { data } = await axiosSecure("/foods");
      setFoods(data);
    };
    getFood();
  }, []);
  if (foods.length === 0) {
    setLoading(true);
  } else {
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="text-center text-7xl h-min-[cal(100vh-130px)] text-blue-400 py-10">
        Loading....
      </div>
    );
  }
  const pages = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* Search options  */}
      <div className="flex justify-evenly">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg  w-[330px]  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>

        {/* sort by expire date */}
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Deadline</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <button className="btn">Reset</button>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        {foods.slice(0, 3).map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            key={btnNum}
            className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AvailableFoods;
