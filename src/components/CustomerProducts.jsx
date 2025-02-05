import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import products from "./customerProductData";

const CustomerProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex lg:flex-row flex-col font-poppins gap-8">
      <div className="flex lg:flex-col flex-col justify-between gap-10">
        <div className="flex md:flex-row flex-col gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-2">
            <img
              src={products[0].image}
              alt={products[0].title}
              className="rounded-lg mb-4"
            />
            <div className="flex gap-4">
              <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
                <GoArrowUpRight />
              </div>

              <div>
                <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
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
              <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
                <GoArrowUpRight />
              </div>
              <div>
                <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
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
        <div className="md:col-span-2 flex flex-col items-start bg-white rounded-lg p-2">
          <img
            src={products[2].image}
            alt={products[2].title}
            className="rounded-lg mb-4 w-full"
          />
          <div className="flex justify-start gap-4">
            <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
              <GoArrowUpRight />
            </div>
            <div>
              <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
                {products[2].title}
              </h3>
              <p className="text-sm text-gray-600 pe-[40%]">
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
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>
          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[3].title}
            </h3>
            <p className="text-sm text-gray-600">{products[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProducts;
