import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
  const food = useLoaderData();
  const {
    food_name,
    donator_name,
    food_quantity,
    expired_datetime,

    pickup_locatoin,
    food_image,
    _id,
  } = food;
  return (
    <div>
      <h2 className="text-center text-4xl py-5">{food_name}</h2>
    </div>
  );
};

export default SingleFoodDetails;
