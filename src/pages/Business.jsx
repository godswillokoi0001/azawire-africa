import BusinessFeatures from "../components/BusinessFeatures";
import BusinessHero from "../components/BusinessHero";
// import CoreOfferings from "../components/CoreOfferings";
import DownloadAppSection from "../components/DownloadAppSection";
import ExploreMore from "../components/ExploreMore";
import Footer from "../components/Footer";
import NavigationBarB from "../components/NavigationBarB";
// import { offeringsData } from "/src/components/offeringsData.jsx";
import TrustedPartners from "../components/TrustedPartners";
import products from "../components/businessProductData";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Business = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
      <header className="overflow-hidden">
        <NavigationBarB />
        <BusinessHero />
      </header>
      <div className="mt-20">
        <TrustedPartners />
      </div>
      <div className=" max-w-screen-xl mx-auto text-white px-4 py-8">
        <div className=" bg-accent   rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between md:pt-4 md:px-2">
          <div className="md:block hidden">
            <ExploreMore />
          </div>
          <div className="md:hidden flex flex-col items-center">
            <h1 className="text-center text-black text-3xl p-4 lg:text-[3rem] font-medium md:mb-14 text-clash tracking-tighter md:leading-[3rem]">
              Manage All Your Payments <br /> Whether Fiat or Crypto{" "}
            </h1>
            <img src="/images/Dashboard Image.png" alt="" className="" />
          </div>
        </div>
      </div>
      <section className="max-w-screen-xl mx-auto mt-12">
        <div className="flex items-center justify-between mb-4 px-6">
          <h2 className="text-4xl font-poppins font-medium tracking-tighter">
            CoreOfferings
          </h2>
          {/* See more */}
          <div className="flex space-x-4">
          <Link to="/productbusiness" className="text-lg font-semibold mt-4">
            <button className="px-6 py-3 text-xl bg-privariant hover:bg-variant text-white rounded-lg mb-4 font-sora transition duration-300">
              See more
            </button>
          </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4 flex lg:flex-row flex-col justify-between flex-wrap font-poppins gap-4">
          {/* First Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full">
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
          <div className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full">
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
          {/* Third Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full">
            <img
              src={products[2].image}
              alt={products[2].title}
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

        </div>
      </section>
      {/* <CoreOfferings title="Core Offerings" offerings={offeringsData} /> */}
      {/* <FeaturesSection /> */}
      <div className="md:mt-[8rem] mt-[4rem]">
        <BusinessFeatures />
      </div>
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default Business;
