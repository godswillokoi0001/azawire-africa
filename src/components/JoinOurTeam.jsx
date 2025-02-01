import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiMapPin, FiClock } from "react-icons/fi";

const JoinOurTeam = () => {
  return (
    <div className="bg-blue-900 text-white md:py-36 py-12 px-6 md:px-16 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-normal mb-4">Join our Team</h2>
        <p className="text-xl text-gray-300 mb-12">
          Azawire ensures that sending and receiving money—locally <br /> or internationally—is effortless and cost-effective.
        </p>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col md:flex-row justify-between bg-white text-gray-900 p-8 py-8 rounded-lg text-left"
            >
              <div>
                <h3 className="text-[1.8rem] font-bold mb-3">Financial Analyst</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  We are looking for a mid-level financial analyst to join our team.
                </p>
                <div className="flex space-x-4">
                  <span className="flex items-center px-4 py-2 bg-gray-300 text-black rounded-full text-sm font-medium">
                    <FiMapPin className="mr-2" /> Hybrid
                  </span>
                  <span className="flex items-center px-4 py-2 bg-gray-300 text-black rounded-full text-sm font-medium">
                    <FiClock className="mr-2" /> Full-time
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="flex items-center px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700">
                  Join Waitlist <FiArrowRight className="ml-2" />
                </button> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
