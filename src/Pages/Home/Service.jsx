import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { TbCashBanknoteOff } from "react-icons/tb";

const Service = () => {
  const [typeEffect] = useTypewriter({
    words: [" Our Artist", " Our Team"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="mt-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 space-y-7 md:space-y-0 bg-gray-100 py-16">
        <div className="flex flex-col space-y-4 items-center">
          <TbTruckDelivery className="w-20 h-20 text-red-600 " />
          <h2 className="text-3xl font-bold text-center">
            Fatest <br /> Delivery
          </h2>
          <p className="w-full px-5 md:px-0 md:w-2/3 text-center text-xl  font-semibold">
            We deliver across the country to make sure you get your products on
            time.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <MdOutlineSentimentSatisfiedAlt className="w-20 h-20 text-red-600 " />
          <h2 className="text-3xl font-bold text-center">
            Satisfied <br /> Customers
          </h2>
          <p className="w-full px-5 md:px-0 md:w-2/3 text-center text-xl  font-semibold">
            We strive to give our customers the best experience!
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <TiMessages className="w-20 h-20 text-red-600 " />
          <h2 className="text-3xl font-bold text-center">
            Top-Notch <br /> Support
          </h2>
          <p className="w-full px-5 md:px-0 md:w-2/3 text-center text-xl  font-semibold">
            Contact us anytime if you're having issues with your order.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <TbCashBanknoteOff className="w-20 h-20 text-red-600 " />
          <h2 className="text-3xl font-bold text-center">
            Cash On <br /> Delivery{" "}
          </h2>
          <p className="w-full px-5 md:px-0 md:w-2/3 text-center text-xl  font-semibold">
            We only use trusted payment providers to make sure your transaction
            is secure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
