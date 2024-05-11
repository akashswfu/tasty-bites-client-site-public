import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../ReactHooks/useAxiosSecure";
import FoodCard from "../AvailableFoods/FoodCard";
import useAuth from "../../ReactHooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        {foods.slice(0, 6).map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
      <div className="py-10 text-center">
        <Link to="/availableFoods">
          <button className="btn btn-primary ">SHOW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
