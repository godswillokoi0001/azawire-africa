import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import DownloadAppSection from "../components/DownloadAppSection";

import { GoArrowUpRight } from "react-icons/go";

const ProductCustomer = () => {
  const products = [
    {
      id: 1,
      image: "/images/Visual Card and Physical Cards.png", // Replace with actual image paths
      title: "Virtual & Physical cards",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 2,
      image: "/images/Offline Payment.png",
      title: "Offline Payment",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 3,
      image: "/images/Multicurrency Vitual Account.png",
      title: "Multicurrency virtual account",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 4,
      image: "/images/Stable Coin Payment.png",
      title: "Stable coin Payment",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
      <div className="max-w-screen-xl mx-auto">
        <header className="">
          <NavigationBar />
          <div className=" px-6 lg:px-4 py-20 pt-24 md:pt-48">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left Section */}
              <div className="w-full md:w-[60%] mb-6 md:mb-0">
                <button className="px-6 py-3 text-xl bg-secondary text-white rounded-lg mb-4 font-sora">
                  Products
                </button>
                <h1
                  className="text-3xl md:text-6xl font-semibold mb-4 text-black font-sora tracking-tight"
                  style={{ lineHeight: 1.2 }}
                >
                  Azawire is redefining <br /> digital banking with the <br />{" "}
                  power of Web3 <br />
                  technology
                </h1>
              </div>
              {/* Right Section */}
              <div className="w-full md:w-[40%] text-gray-300 text-lg md:text-[1.5rem] font-inter font-medium leading-9"></div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          <div className="flex flex-col gap-10">
            <div className="flex gap-8">
              {/* First Card */}
              <div className="flex flex-col items-center bg-white rounded-lg p-2">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="rounded-lg mb-4"
                />
                <div className="flex gap-4">
                  <div className="bg-primary p-4 h-auto w-[5.5rem] rounded-full text-white text-[1.6rem] flex items-center justify-center">
                    <GoArrowUpRight />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">
                      {products[0].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {products[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="flex flex-col items-center bg-white rounded-lg p-2">
                <img
                  src={products[1].image}
                  alt={products[1].title}
                  className="rounded-lg mb-4"
                />
                <div className="flex gap-4">
                  <div className="bg-primary p-4 h-auto w-[5.5rem] rounded-full text-white text-[1.6rem] flex items-center justify-center">
                    <GoArrowUpRight />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">
                      {products[1].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {products[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card (Wider layout for multicurrency virtual account) */}
            <div className="md:col-span-2 flex flex-col items-center bg-white rounded-lg p-2">
              <img
                src={products[2].image}
                alt={products[2].title}
                className="rounded-lg mb-4 w-full"
              />
              <div className="flex gap-4">
                  <div className="bg-primary p-4 h-auto w-[4rem] rounded-full text-white text-[1.6rem] flex items-center justify-center">
                    <GoArrowUpRight />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">
                      {products[2].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {products[2].description}
                    </p>
                  </div>
                </div>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-2 h-auto">
            <img
              src={products[3].image}
              alt={products[3].title}
              className="rounded-lg mb-4"
            />
            <div className="flex gap-4">
                  <div className="bg-primary p-4 h-auto w-[5.5rem] rounded-full text-white text-[1.6rem] flex items-center justify-center">
                    <GoArrowUpRight />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">
                      {products[3].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {products[3].description}
                    </p>
                  </div>
                </div>
          </div>
        </div>
        <DownloadAppSection />
        <Footer />
      </div>
    </div>
  );
};

export default ProductCustomer;
