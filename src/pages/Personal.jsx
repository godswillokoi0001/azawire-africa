import React from "react";
// Uncomment if modal is needed
// import Modal from "../components/Modal";

import CoreOfferings from "../components/CoreOfferings";
import DownloadAppSection from "../components/DownloadAppSection";
import ExploreMore from "../components/ExploreMore";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavigationBar from "../components/NavigationBar";
import ValueProposition from "../components/ValueProposition";
import { offeringsData } from "/src/components/offeringsData.jsx";
import TrustedPartners from "../components/TrustedPartners";

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
              <NavigationBar />
              <HeroSection />
            </div>
          </header>

          <div className="md:mt-28 mt-20">
            <TrustedPartners />
          </div>
          <ExploreMore />
          <CoreOfferings title="Core Offerings" offerings={offeringsData} />
          <ValueProposition />
          <DownloadAppSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Personal;