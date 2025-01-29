import React from "react";
import NavigationBar2 from "../components/NavigationBar2";
import Footer from "../components/Footer";

const WaitlistPage = () => {
  return (
    <>
    <NavigationBar2 />
    <div>
    <iframe src="/WaitlistPage.html" title="Waitlist Page" style={{ width: "100%", height: "100vh", border: "none"}}></iframe>
    </div>
     
    <Footer />
    </>
  );
};

export default WaitlistPage;
