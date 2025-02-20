import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const WaitlistSuccessPage = () => {
  return (
    <>
      <header>
        <NavigationBar2 />
        <div
          className="h-screen bg-[#030637] flex items-center justify-center w-full py-16 md:py-20 text-white"
          style={{
            backgroundImage: "url(/images/background-line-1.png)",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
          }}
        >
          {/* Hero Section */}
          <div
            className="w-full mx-auto px-6 lg:px-8 text-center mt-24 font-sora"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {/* Heading */}
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold text-white mb-3 md:mb-6">
                Congratulations! <br /> You’re on the Azawire waitlist—welcome
                to the fam!{" "}
              </h1>
              <br className="md:hidden" />
              <p className="font-light md:text-[1.6rem] text-[1.2rem]">
                Join our Telegram for exclusive giveaways & updates:
              </p>
            </div>
            <br />
            <div className="flex justify-center md:flex-row flex-col gap-3">
              <a
                href="https://t.me/azawireio" target="_blank" rel="noreferrer"
                className="inline-flex justify-center items-center bg-primary hover:bg-blue-600 px-8 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
              >
                Join Telegram
                <span className="pl-2">
                  <img
                    className="w-5"
                    src="/images/icons/icons8-telegram-app-50 (1).png"
                    alt="Icon"
                  />
                </span>
              </a>
              <Link
                to="/"
                className="inline-flex justify-center items-center bg-transparent border border-white hover:bg-privariant px-8 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
              >
                Return Home
                <span className="pl-2">
                  <img
                    className="w-5"
                    src="/images/icons/Icons.svg"
                    alt="Icon"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default WaitlistSuccessPage;
