import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "../AvailableFoods/FoodCard";
import useAuth from "../../ReactHooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import OurChef from "./OurChef";
import MoreItem from "./MoreItem";
import Subscribe from "./Subscribe";
import Service from "./Service";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Food Items"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { loading, setLoading } = useAuth();

  useEffect(() => {
    const getFood = async () => {
      const { data } = await axiosSecure(`/foods`);
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
  return (
    <div>
      <Helmet>
        <title>TastyBites | Home</title>
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      <div className="mt-10 md:mt-0 px-5 md:px-0">
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-5 md:mt-20 md:mb-10">
          <span className="  text-transparent bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text">
            {typeEffect}{" "}
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 justify-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.slice(0, 6).map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
      <div className="md:py-16 py-5 text-center ">
        <Link to="/availableFoods">
          <button className="px-6 rounded-md py-3 border-0 text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700 text-white">
            SHOW ALL
          </button>
        </Link>
      </div>
      <div className="px-5 md:px-0">
        <Service></Service>
      </div>
      <div>
        <MoreItem></MoreItem>
      </div>
      <div className="mt-16 px-5 md:px-0">
        <Subscribe></Subscribe>
      </div>

      <div>
        <OurChef></OurChef>
      </div>
    </div>
  );
};

export default Home;
