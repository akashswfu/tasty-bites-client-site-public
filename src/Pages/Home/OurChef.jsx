import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const OurChef = () => {
  const [typeEffect] = useTypewriter({
    words: ["Best Award Winning Chef"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="mb-10">
      <Slide direction="{'down'} delay={1000}">
        <h1 className="text-3xl font-bold text-center mt-20">
          <span className=" text-transparent bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text">
            {typeEffect}{" "}
          </span>
        </h1>
        <p className="text-center md:w-1/2 w-full px-5 md:px-0 mx-auto font-semibold text-lg pt-8 pb-16">
          Renowned for culinary prowess, our award-winning chef crafts exquisite
          dishes with passion, innovation, and a dedication to perfection.
          Experience excellence today!
        </p>
      </Slide>
      <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-7 md:space-y-0">
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/KYDRx78Q/m1.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Alex Panday</h2>
          <p className="text-xl font-semibold">Bangladesh</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/zBdvRJWg/m2.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Subin Ahemed</h2>
          <p className="text-xl font-semibold">South Korea</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/4yq3BBW4/m3.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Bijoy Sarkar</h2>
          <p className="text-xl font-semibold">Thailand</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/vHxTcwm4/m4.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Akash Sutradhar </h2>
          <p className="text-xl font-semibold">India</p>
        </div>
      </div>
    </div>
  );
};

export default OurChef;
