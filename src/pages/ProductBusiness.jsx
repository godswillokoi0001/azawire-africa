import React from "react";
import NavigationBar2 from "../components/NavigationBar2";
import Footer from "../components/Footer";
import DownloadAppSection from "../components/DownloadAppSection";
import BusinessProducts from "../components/BusinessProducts";



const ProductBusiness = () => {
  return (
    <div className="bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
      <div className="">
        <header className=" overflow-hidden bg-privariant">
          <NavigationBar2 />
          <div className=" px-6 lg:px-4 py-20 pt-24 md:pt-48 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left Section */}
              <div className="w-full md:w-[60%] mb-6 md:mb-0">
                <button className="px-6 py-3 text-xl bg-secondary text-white rounded-lg mb-4 font-sora">
                  Products
                </button>
                <h1
                  className="text-3xl md:text-6xl font-semibold mb-4 text-white font-sora tracking-tight"
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
        <BusinessProducts />
        <DownloadAppSection />
        <Footer />
      </div>
    </div>
  );
};

export default ProductBusiness;
