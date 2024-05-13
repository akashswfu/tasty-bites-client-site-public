import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-100 flex flex-col item-center justify-center space-y-5 py-20">
      <h2 className="text-3xl font-bold text-center uppercase">
        Always Get Latest Foods Item update
      </h2>
      <p className="text-xl text-center font-semibold w-full md:w-1/2 mx-auto ">
        Stay informed with the latest updates. Subscribe now and never miss out
        on our latest news, offers, and promotions!
      </p>
      <div className="text-center rounded-md pt-5">
        <input
          className=" px-4 py-4  rounded-l-md outline-none"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="text-transparent border-0 rounded-r-md bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-700 text-white py-4 px-4">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
