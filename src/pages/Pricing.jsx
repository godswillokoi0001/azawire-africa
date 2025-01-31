import React from "react";
import NavigationBar2 from "../components/NavigationBar2";
import Footer from "../components/Footer";
import JoinOurTeam from "../components/JoinOurTeam";

const Pricing = () => {
  return (
    <>
      <header className="bg-variant min:h-screen">
  <NavigationBar2 />
  <div className="max-w-screen-xl mx-auto px-6 lg:px-4 py-20 pt-24 md:pt-48">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* Left Section */}
      <div className="w-full md:w-[60%] mb-6 md:mb-0">
        <button className="px-4 py-2 text-md font-medium bg-secondary text-white rounded-lg shadow-md mb-4">
          About Azawire
        </button>
        <h1 className="text-3xl md:text-6xl font-medium mb-4 text-white font-clash leading-snug">
          Azawire is redefining <br /> digital banking with the <br />{" "}
          power of Web3 <br />
          technology
        </h1>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[40%] text-gray-300 text-lg md:text-xl font-medium leading-8">
        <p className="mb-4">
          Our mission is to bridge the gap between traditional finance and
          decentralized banking, making global payments simpler, faster,
          and more accessible for everyone.
        </p>
        <p>
          We integrate blockchain-powered on-ramp and off-ramp systems,
          stablecoin transactions, virtual card services, and seamless
          payment methods like USSD and WhatsApp.
        </p>
      </div>
    </div>
  </div>
</header>
<section>
  <div className="max-w-screen-xl mx-auto px-6 lg:px-4 md:py-20 py-12">
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
      {/* Left Section */}
      <div className="w-full md:w-[60%] ">
        <h1
          className="text-2xl md:text-4xl font-normal text-gray-800 font-poppins tracking-tighter leading-snug pb-4"
          style={{ lineHeight: 1.5 }}
        >
          Whether you're a freelancer, remote worker, business owner, or
          an individual looking for seamless banking solutions
        </h1>
        <div className="leading-8 tracking-tighter text-gray-600 text-lg md:text-[1.5rem] font-normal md:pr-10">
          <p className="mb-4">
            Azawire ensures that sending and receiving money—locally or
            internationally—is effortless and cost-effective.
          </p>
          <p>
            With Azawire, banking is no longer limited by borders,
            platforms, or banking hours. It’s instant, inclusive, and
            built for the digital economy.
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[40%]">
        <img
          src="/images/Group 1000001760.png"
          alt="3D Currency Icons"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>

      <section>
        <JoinOurTeam />
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
