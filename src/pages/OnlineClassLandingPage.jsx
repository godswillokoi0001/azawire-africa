import Footer from "../components/Footer";
import Navbar from "../components/NavigationBar";
import WhatYoullLearn from "../components/WhatYoullLearn";
import OnlineClassHero from "../components/OnlineClassHero";

const OnlineClassLandingPage = () => {
  return (
    <>
    <div className=""> 
        <div className="mx-auto max-w-screen-xl w-full mb-24">
        <Navbar />
        </div>
        <OnlineClassHero />
      <div className=" font-sora">
        <div className="flex flex-col md:flex-row gap-8 py-8 px-4 max-w-screen-xl mx-auto">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Nigeria leads Africa in digital finance adoption
            </h1>
            <p className="text-gray-700">
              yet many still struggle to understand how it works. Scammers are
              everywhere, preying on those who don't know how to navigate this
              space safely. Without proper knowledge, you risk losing your
              hard-earned money instead of growing it.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
            <p className="text-2xl text-gray-800">
              This FREE 3-day training is your chance to learn how to use
              digital money safely, protect yourself from scams, and unlock
              global opportunities.
            </p>
          </div>
        </div>
      </div>
      <WhatYoullLearn />
      <div className="bg-privariant text-white py-16 px-6 font-sora">
        <div className="max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row justify-between">
          {/* Left column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block border-2 border-white rounded-full px-8 py-3 mb-8">
              <h2 className="text-xl font-semibold">
                Who is this training for?
              </h2>
            </div>

            <ul className="space-y-4 mb-12 text-[1rem]">
              <li className="flex items-start">
                 ✅ If you're tired of failed transactions and high bank charges
              </li>
              <li className="flex items-start">
                ✅  If you work online and struggle to receive payment
              </li>
              <li className="flex items-start">
                ✅ If you want to stop falling for online scams
              </li>
              <li className="flex items-start">          
                ✅ If you're curious about digital money but don't know where to start
              </li>
              <li className="flex items-start">
                ✅ If you're looking for better ways to save and grow your money
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div className="md:w-2/5">
            <h2 className="text-4xl font-bold mb-8">Why Attend</h2>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center">
                <span className="mr-4 text-2xl">🔥</span>
                <span className="text-3xl font-medium">100% FREE</span>
              </li>
              <li className="flex items-center">
                <span className="mr-4 text-2xl">🔥</span>
                <span className="text-3xl font-medium">Beginner-Friendly</span>
              </li>
              <li className="flex items-center">
                <span className="mr-4 text-2xl">🔥</span>
                <span className="text-3xl font-medium">Expert Guidance</span>
              </li>
            </ul>

            <p className="text-2xl">Limited slots available</p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default OnlineClassLandingPage;
