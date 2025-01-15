import CoreOfferings from "../components/CoreOfferings";
import ExploreMore from "../components/ExploreMore";
import HeroSection from "../components/HeroSection";
import NavigationBar from "../components/NavigationBar";
import ValueProposition from "../components/ValueProposition";

import { offeringsData } from "/src/components/offeringsData.jsx"; // Named import


const Personal = () => {
  return (
    <div className="bg-gradient-to-r from-[#f9feff] to-[#e5f9ff]">
      <header className="overflow-hidden">
        <HeroSection />
        <NavigationBar />
      </header>
      <ExploreMore />
      <CoreOfferings title="Core Offerings" offerings={offeringsData} />
      <ValueProposition />
    </div>
  );
};

export default Personal;
