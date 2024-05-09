import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "./FoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getFood = async () => {
      const { data } = await axiosSecure();
      setFoods(data);
    };
    getFood();
  }, []);

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
