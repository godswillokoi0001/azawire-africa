import React from "react";
// Uncomment if modal is needed
// import Modal from "../components/Modal";

// import CoreOfferings from "../components/CoreOfferings";
import DownloadAppSection from "../components/DownloadAppSection";
import ExploreMore from "../components/ExploreMore";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavigationBarP from "../components/NavigationBarP";
import ValueProposition from "../components/ValueProposition";
// import { offeringsData } from "/src/components/offeringsData.jsx";
import TrustedPartners from "../components/TrustedPartners";
import products from "../components/customerProductData";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Personal = () => {
  // Uncomment if modal is needed
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [hasModalShown, setHasModalShown] = useState(false);

  // const openModal = () => {
  //   console.log("Opening modal manually");
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   console.log("Closing modal");
  //   setIsModalOpen(false);
  // };

  // Uncomment if modal is needed
  // useEffect(() => {
  //   console.log("useEffect triggered. hasModalShown =", hasModalShown);
  //   if (!hasModalShown) {
  //     console.log("Opening modal on initial load");
  //     setIsModalOpen(true);
  //     setHasModalShown(true);
  //   }
  // }, [hasModalShown]);

  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="w-full">
        {/* Uncomment if modal is needed */}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} className="z-50" /> */}

        <div className="bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
          <header className="w-full">
            <div className="hidden md:inline max-w-screen-xl">
              {/* Ensure the image paths are correct */}
              <img
                src="/images/hero elements.png"
                alt="Hero Elements"
                className="absolute w-[16rem] right-0 top-14 z-40"
              />
              <img
                src="/images/Line.png"
                alt="Line Decoration"
                className="absolute w-[36rem] right-0 top-8 z-20"
              />
            </div>
            <div className="max-w-screen-xl mx-auto">
              <NavigationBarP />
              <HeroSection />
            </div>
          </header>

          <div className="md:mt-28 mt-20">
            <TrustedPartners />
          </div>
          <ExploreMore />
          {/* <CoreOfferings title="Core Offerings" offerings={offeringsData} /> */}
          <section>

          
          <div className="max-w-7xl mx-auto px-4 py-8 flex lg:flex-row flex-col font-poppins gap-8">
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
          <Link to="/productcustomer" className="text-lg font-semibold mt-4 flex justify-center">
            <button className="px-6 py-3 text-xl bg-secondary text-white rounded-lg mb-4 font-sora">
              See more
            </button>
          </Link>
          </section>
          <ValueProposition />
          <DownloadAppSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Personal;
