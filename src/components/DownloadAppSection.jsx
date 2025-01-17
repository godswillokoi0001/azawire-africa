import React from "react";

const DownloadAppSection = () => {
  return (
    <section className=" py-12">
        <div className="max-w-screen-xl mx-auto  text-white px-4 py-8  ">  
      <div className="bg-variant rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:py-12 md:px-40">
        {/* Text Section */}
        <div
          className="text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl lg:text-[3rem] font-medium mb-4 font-clash tracking-tighter leading-10">
            Download the <br /> Azawire App
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="flex items-center bg-primary text-darkblue px-4 py-2 rounded-lg shadow-md hover:bg-primary/60 transition"
            >
              <span className="px-3 py-2">
                <img
                src="/images/icons/apple-icon.svg"
                alt="App Store"
                className="w-6"
              />
              </span>
              Get it on App Store
            </a>
            <a
              href="#"
              className="flex items-center bg-secondary text-darkblue px-4 py-2 rounded-lg shadow-md hover:bg-secondary/60 transition"
            >
              <span className="px-3 py-2">
                <img
                src="/images/icons/playstore-icon.svg"
                alt="Play Store"
                className="w-6"
              /></span>
              Get it on Play Store
            </a>
          </div>
        </div>

        {/* QR Code Section */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="p-4 rounded-lg shadow-lg">
            <img
              src="/images/Group 1000001749.png"
              alt="QR Code"
              className="w-72"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
