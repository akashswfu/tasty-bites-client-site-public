import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const OurChef = () => {
  const [typeEffect] = useTypewriter({
    words: ["Best Award Winning Chefs"],
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 space-y-7 md:space-y-0">
        <div className="flex flex-col space-y-4 items-center mb-7 lg:mb-0">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/wBvcMxxz/c1.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Alex Panday</h2>
          <p className="text-xl font-semibold">India</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/QCLpfpQN/c4.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Subin Ahemed</h2>
          <p className="text-xl font-semibold">South Korea</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/QMygTLVT/c2.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Bijoy Sarkar</h2>
          <p className="text-xl font-semibold">Thailand</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/634rVHG1/c3.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Akash Sutradhar </h2>
          <p className="text-xl font-semibold">Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default OurChef;
