import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";

import CoreOfferings from "../components/CoreOfferings";
import DownloadAppSection from "../components/DownloadAppSection";
import ExploreMore from "../components/ExploreMore";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavigationBar from "../components/NavigationBar";
import ValueProposition from "../components/ValueProposition";
import { offeringsData } from "/src/components/offeringsData.jsx";

const Personal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasModalShown, setHasModalShown] = useState(false);

  const openModal = () => {
    console.log("Opening modal manually");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("useEffect triggered. hasModalShown =", hasModalShown);
    if (!hasModalShown) {
      console.log("Opening modal on initial load");
      setIsModalOpen(true);
      setHasModalShown(true);
    }
  }, [hasModalShown]);

  return (
    <div>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} className="z-50" />

      <div className="bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
        <header className="overflow-hidden">
          {/* Pass the function to HeroSection */}
          <HeroSection onWaitlistClick={openModal} />
          <NavigationBar />
        </header>
        <ExploreMore />
        <CoreOfferings title="Core Offerings" offerings={offeringsData} />
        <ValueProposition />
        <DownloadAppSection />
        <Footer />
      </div>
    </div>
  );
};

export default Personal;
