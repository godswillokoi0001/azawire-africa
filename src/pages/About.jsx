import React from "react";
import NavigationBar2 from "../components/NavigationBar2";
import AboutHero from "../components/AboutHero";
import DownloadAppSection from "../components/DownloadAppSection";
import Footer from "../components/Footer";


const AboutSection = () => {
  console.log("AboutSection");
  return (
    <div>
      <header className="bg-[#030637] text-white h-[30rem]"
       style={{
        backgroundImage: "url(/images/background-line-3.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }}>
        <NavigationBar2 />
        <AboutHero />
      </header>
      <section className="text-white py-4 lg:py-8">
        <div className="max-w-7xl mx-auto flex justify-between md:flex-row flex-col gap-4">
          {/* Left Section - Hero Content */}
          <div className="md:w-1/3 w-full">
            <img
              src="/images/Founder.png"
              alt="Founder"
              className="md:w-[24rem] w-full rounded-lg object-cover mr-6"
            />
          </div>

          {/* Right Section - Founder's Story */}
          <div className="md:w-2/3 w-full bg-white text-black rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-6">
              {/* Founder's Image */}
            </div>
            {/* Founder's Content */}
            <div className="md:px-6 text-sm md:text-[1.2rem] md:leading-[2.2rem] text-gray-600">
              <h3 className="text-[1.2] font-bold mb-4 text-[#0A0E27]">
                What Are Web3 Payments?
              </h3>
              <p className=" mb-4">
                Web3 payments leverage blockchain technology to facilitate
                peer-to-peer transactions without relying on intermediaries like
                banks or payment processors. These payments utilize
                cryptocurrencies or tokens to transfer value, enabling direct
                and transparent exchanges between parties. Unlike traditional
                payment systems, which often involve multiple layers of
                processing and fees, Web3 payments are decentralized,
                instantaneous, and borderless.Web3 payments leverage blockchain
                technology to facilitate peer-to-peer transactions without
                relying on intermediaries like banks or payment processors.
                These payments utilize cryptocurrencies or tokens to transfer
                value, enabling direct and transparent exchanges between
                parties. Unlike traditional payment systems, which often involve
                multiple layers of processing and fees, Web3 payments are
                decentralized, instantaneous, and borderless.
              </p>
              <h3 className="">
                Some key characteristics of Web3 payments include:
              </h3>
              <ul className="list-disc ps-10">
                <li>
                  Decentralization: Transactions occur on blockchain networks,
                  eliminating the need for central authorities.
                </li>
                <li>
                  Transparency: All transactions are recorded on a public
                  ledger, ensuring accountability.
                </li>
                <li>
                  Programmability: Smart contracts enable automated payments
                  based on predefined conditions.
                </li>
                <li>
                  Global Accessibility: Anyone with an internet connection and a
                  crypto wallet can participate.
                </li>
              </ul>
              <p className=" text-gray-600">
                Why Businesses Need to Embrace Web3 Payments As the world
                becomes more interconnected, businesses must adapt to the
                changing financial landscape. Web3 payments offer a host of
                benefits that make them an attractive option for enterprises of
                all sizes. 1. Cost Efficiency Traditional payment systems often
                come with high transaction fees due to intermediaries. Web3
                payments eliminate these middlemen, significantly reducing
                costs. For example, cross-border transactions, which typically
                incur hefty fees, can be conducted at a fraction of the cost
                using cryptocurrencies. 2. Faster Transactions In the
                traditional banking system, international payments can take days
                to settle due to intermediary banks and currency conversions.
                Web3 payments, on the other hand, are near-instantaneous. This
                speed is especially beneficial for businesses requiring quick
                cash flow or those operating in fast-paced markets.
              </p>
              <p className="text-[1.2rem] text-black my-6">
                <strong>Emmanuel Onyo</strong>
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/email.svg"
                    alt="Email"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/youtube.svg"
                    alt="YouTube"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/instagram.svg"
                    alt="Instagram"
                    className="h-5 me-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default AboutSection;
