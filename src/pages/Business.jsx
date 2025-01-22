import BusinessFeatures from "../components/BusinessFeatures";
import BusinessHero from "../components/BusinessHero";
import DownloadAppSection from "../components/DownloadAppSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";

const Business = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="overflow-hidden">
        <BusinessHero />
        <NavigationBar2 />
        
      </header>
      <div className="max-w-screen-xl mx-auto text-white px-4 py-16 absolute inset-x-0 top-[34rem]">
        <div className="bg-accent shadow-xl rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between md:pt-12 md:px-24">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-black text-3xl lg:text-[3rem] font-medium mb-14 font-clash tracking-tighter leading-[3rem]">
              Manage All Your Payments <br /> Whether Fiat or Crypto{" "}
            </h1>
            <img src="/images/Dashboard Image.png" alt="" className="" />
          </div>
        </div>
      </div>

      <FeaturesSection />
      <BusinessFeatures />
      <DownloadAppSection />
      <Footer />
      
    </div>
  );
};

export default Business;
