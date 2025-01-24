import BusinessFeatures from "../components/BusinessFeatures";
import BusinessHero from "../components/BusinessHero";
import DownloadAppSection from "../components/DownloadAppSection";
import ExploreMore from "../components/ExploreMore";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";

const Business = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="overflow-hidden">
      <NavigationBar2 />
        <BusinessHero />
      </header>
      <div className=" max-w-screen-xl mx-auto text-white px-4 py-16 absolute inset-x-0 md:top-[30rem] top-[40rem]">
          
        <div className=" bg-accent shadow-xl rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between md:pt-4 md:px-2">
        <div className="md:block hidden">

        <ExploreMore/>
        </div>
          <div className="md:hidden flex flex-col items-center">
            <h1 className="text-center text-black text-3xl p-4 lg:text-[3rem] font-medium md:mb-14 text-clash tracking-tighter md:leading-[3rem]">
              Manage All Your Payments <br /> Whether Fiat or Crypto{" "}
            </h1>
            <img src="/images/Dashboard Image.png" alt="" className="" />
          </div>
        </div>
      </div>

      {/* <FeaturesSection /> */}
      <div className="md:mt-[48rem] mt-[24rem]">
      <BusinessFeatures />
      </div>
      
      <DownloadAppSection />
      <Footer />
      
    </div>
  );
};

export default Business;
