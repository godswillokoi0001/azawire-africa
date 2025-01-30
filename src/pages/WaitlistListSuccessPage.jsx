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
          <div className="w-full mx-auto px-6 lg:px-8 text-center mt-24"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  >
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 md:mb-12">
            Thank you! A WhatsApp message will <br /> be sent to you now...
            </h1>
            <Link
            to="/"
            className="inline-flex justify-center items-center bg-primary hover:bg-blue-600 px-8 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
          >
            Return Home
            <span className="pl-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="Icon" />
            </span>
          </Link>
          </div>
          </div>
        </header>
      <Footer />
    </>
  );
};

export default WaitlistSuccessPage;
