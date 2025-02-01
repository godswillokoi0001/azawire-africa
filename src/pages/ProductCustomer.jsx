import React from "react";

const ProductCustomer = () => {
  const products = [
    {
      id: 1,
      image: "/path-to-image1.jpg", // Replace with actual image paths
      title: "Virtual & Physical cards",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 2,
      image: "/path-to-image2.jpg",
      title: "Offline Payment",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 3,
      image: "/path-to-image3.jpg",
      title: "Multicurrency virtual account",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
    {
      id: 4,
      image: "/path-to-image4.jpg",
      title: "Stable coin Payment",
      description:
        "Empower your business with Azawire's scalable, cost-effective payment solutions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* First Card */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
        <img
          src={products[0].image}
          alt={products[0].title}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-center">
          {products[0].title}
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {products[0].description}
        </p>
      </div>

      {/* Second Card */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
        <img
          src={products[1].image}
          alt={products[1].title}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-center">
          {products[1].title}
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {products[1].description}
        </p>
      </div>

      {/* Third Card (Wider layout for multicurrency virtual account) */}
      <div className="md:col-span-2 flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
        <img
          src={products[2].image}
          alt={products[2].title}
          className="rounded-lg mb-4 w-full"
        />
        <h3 className="text-lg font-semibold text-center">
          {products[2].title}
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {products[2].description}
        </p>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
        <img
          src={products[3].image}
          alt={products[3].title}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-center">
          {products[3].title}
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {products[3].description}
        </p>
      </div>
    </div>
  );
};

export default ProductCustomer;
