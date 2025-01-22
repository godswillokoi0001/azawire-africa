import React from "react";

const BusinessFeatures = () => {
  const features = [
    {
      title: "Advanced API Integration",
      description:
        "Seamlessly integrate Azawire's payment solutions into your existing systems.",
      buttonText: "View Documentation",
      buttonLink: "#",
      imageSrc: "/images/Frame 1000004642.png",
    },
    {
      title: "Multi-Currency Gateway",
      description:
        "Offer your customers multiple payment options, from traditional cards to crypto wallets.",
      buttonText: "Get Started",
      buttonLink: "#",
      imageSrc: "/images/image 1846.png",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Gain insights into your financial data with live dashboards and reports.",
      buttonText: "Get Started",
      buttonLink: "#",
      imageSrc: "/images/Group 1000001740.png",
    },
  ];

  return (
    <section className="bg-[#002C90] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-semibold font-clash text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-accent text-lg sm:text-xl mb-6">
                {feature.description}
              </p>
              <a
                href={feature.buttonLink}
                className="inline-flex items-center px-6 sm:px-8 py-4 sm:py-6 bg-secondary text-accent font-medium text-lg sm:text-[1.2rem] rounded-full hover:bg-[#00b589] transition"
              >
                {feature.buttonText} <span className="ml-2">➔</span>
              </a>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessFeatures;
