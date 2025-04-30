import Footer from "../components/Footer";
import Navbar from "../components/NavigationBar";
import WhatYoullLearn from "../components/WhatYoullLearn";
import OnlineClassHero from "../components/OnlineClassHero";
import OnlineClassRegistrationPage from "../pages/OnlineClassRegistrationPage";

const OnlineClassLandingPage = () => {
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-screen-xl w-full mb-12">
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
        <OnlineClassRegistrationPage />
        <WhatYoullLearn />
        <div className="bg-privariant text-white pt-16 pb-4 px-6 font-sora">
          <div className="max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row justify-between">
            {/* Left column */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block border-2 border-white rounded-full px-8 py-3 mb-8">
                <h2 className="md:text-xl font-semibold">
                  This Training is Perfect For:
                </h2>
              </div>

              <ul className="space-y-4 mb-12 md:text-[1.2rem]">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>  Freelancers & remote workers tired of payment delays
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>  Online shoppers struggling with blocked cards
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>  Small business owners receiving money from abroad
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>  Anyone curious about crypto but not sure where to start
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>  Gen Z & Millennials who want smart financial tools
                </li>
                <li className="flex items-start text-gray-300 pt-3 text-[1rem]">
                  No Experience Needed This training is 100% beginner-friendly.
                  If you can use WhatsApp, you can use stablecoins. We’ll break
                  everything down — step by step.
                </li>
              </ul>
            </div>

            {/* Right column */}
            <div className="md:w-2/5">
              <h2 className="text-4xl font-normal mb-4">
                No Experience Needed
              </h2>
              <p className="text-white-300 text-[0.9rem] mb-8">
                This training is 100% beginner-friendly. If you can use
                WhatsApp, you can use stablecoins. We’ll break everything down —
                step by step.
              </p>
              <div className="inline-block border border-white rounded-full px-8 py-3 my-8">
                <h2 className="md:text-xl font-normal">
                  Why You Should Join Now:
                </h2>
              </div>

              <ul className="space-y-4 mb-12 text-[0.9rem]">
                <span className="flex flex-row gap-2">
                  <li className="flex items-start">
                    <span>▫️</span> It’s FREE
                  </li>
                  <li className="flex items-start">
                    <span>▫️</span> It’s practical
                  </li>
                </span>

                <li className="flex items-start">
                  <span>▫️</span> It’s short and beginner-safe
                </li>
                <li className="flex items-start">
                  <span>▫️</span> It will open your eyes to how money should
                  move in 2025 and beyond
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OnlineClassLandingPage;
