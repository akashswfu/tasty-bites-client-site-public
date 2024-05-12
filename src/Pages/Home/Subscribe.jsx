import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-100 flex flex-col item-center justify-center space-y-5 py-20">
      <h2 className="text-3xl font-bold text-center">
        Always Get Latest Foods Item update
      </h2>
      <p className="text-xl font-semibold w-full md:w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti
        vel a hic vero id neque possimus voluptate voluptatibus consequatur!
      </p>
      <div className="text-center rounded-md">
        <input
          className="bg-blue-200 px-3 py-3 outline-none"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="bg-red-400 py-3 px-3">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
