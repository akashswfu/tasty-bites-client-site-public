import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "../AvailableFoods/FoodCard";

const Home = () => {
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
        {foods.slice(0, 6).map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
