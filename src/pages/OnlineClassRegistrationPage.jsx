import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const OnlineClassRegistrationPage = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto w-full mb-8">

    
      <NavigationBar />
      <div className="w-full h-screen"> 
        <iframe
          src="/OnlineClassRegistrationPage.html"
          title="OnlineClassRegistration"
          style={{ width: "100%", height: "100vh", border: "none" }}
          className="bg-[#ffffff] pt-28 px-4" 
        ></iframe>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default OnlineClassRegistrationPage;
