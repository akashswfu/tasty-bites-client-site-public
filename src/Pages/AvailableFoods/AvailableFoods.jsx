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

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
