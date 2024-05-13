import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import useAuth from "../../ReactHooks/useAuth";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, setLoading } = useAuth();
  const [foodsPerPage, setFoodsPerPage] = useState(6);
  const [sort, setSort] = useState("");
  const [searchText, setSearchText] = useState("");
  const [layout, setLayout] = useState(3);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(
  //       `http://localhost:5000/all-foods?page=${currentPage}&size=${foodsPerPage}&sort=${sort}`
  //     );
  //     setFoods(data);
  //   };
  //   getData();
  // }, [currentPage, foodsPerPage, sort]);

  useEffect(() => {
    const getFood = async () => {
      const { data } = await axiosSecure(
        `/all-foods?page=${currentPage}&size=${foodsPerPage}&sort=${sort}&search=${search}`
      );
      setFoods(data);
    };
    getFood();
  }, [currentPage, foodsPerPage, sort, search]);
  console.log(foods);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(`/foods-count?search=${search}`);

      setCount(data.count);
    };
    getCount();
  }, [search]);

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
  const numberOfPages = Math.ceil(count / foodsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  console.log(searchText);

  const handleLayout = () => {
    if (layout === 3) {
      setLayout(2);
    } else {
      setLayout(3);
    }
  };

  const handleReset = () => {
    setSort("");
    setLayout(3);
    setSearch("");
    setSearchText("");
  };

  return (
    <div className="min-h-[calc(100vh)]">
      {/* Search options  */}
      <div className="flex justify-evenly">
        <Helmet>
          <title>TastyBites | Available Foods</title>
          {/* <link rel="canonical" href="" /> */}
        </Helmet>
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="px-6 py-2  text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Food Name"
              aria-label="Enter Job Title"
            />

            <button className="text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700  px-6 font-semibold uppercase text-md  text-white border-0 text-md btn">
              Search
            </button>
          </div>
        </form>

        {/* sort by expire date */}
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            value={sort}
            name="deadline"
            id="deadline"
            className=" p-4  rounded-md text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700  px-6 font-semibold uppercase text-md  text-white border-0 text-md btn"
          >
            <option value="dsc">Low Expired Date</option>
            <option value="asc">High Expired Date</option>
          </select>
        </div>
        {/* reset Button  */}
        <div onClick={() => handleLayout(!setLayout())}>
          <button className="text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700  px-6 font-semibold uppercase text-md  text-white border-0 text-md btn">
            Change Layout
          </button>
        </div>
        <button onClick={handleReset} className="btn btn-error text-white">
          Reset
        </button>
      </div>

      <div
        className={`grid grid-cols-1 ${
          layout === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-5 justify-center min-h-[calc(100vh)]`}
      >
        {foods.map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gradient-to-r bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:from-sky-600 hover:to-indigo-700  hover:text-white"
        >
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

            <span></span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum
                ? "text-transparent text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700"
                : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline   hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 bg-gradient-to-r  text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:from-sky-600 hover:to-indigo-700 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className=""></span>

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
