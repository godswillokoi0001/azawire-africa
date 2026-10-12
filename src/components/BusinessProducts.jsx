import { GoArrowUpRight } from "react-icons/go";
import products from "./businessProductData";
import Aos from "aos";
Aos.init();

const BusinessProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex lg:flex-row flex-col justify-between flex-wrap font-poppins gap-4">
      {/* First Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[0].image}
          alt={products[0].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[0].title}
            </h3>
            <p className="text-sm text-gray-600">{products[0].description}</p>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[1].image}
          alt={products[1].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[1].title}
            </h3>
            <p className="text-sm text-gray-600">{products[1].description}</p>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[2].image}
          alt={products[2].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[2].title}
            </h3>
            <p className="text-sm text-gray-600">{products[2].description}</p>
          </div>
        </div>
      </div>
      {/* Fourth Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[3].image}
          alt={products[3].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[3].title}
            </h3>
            <p className="text-sm text-gray-600">{products[3].description}</p>
          </div>
        </div>
      </div>
      {/* Fift Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[4].image}
          alt={products[4].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[4].title}
            </h3>
            <p className="text-sm text-gray-600">{products[4].description}</p>
          </div>
        </div>
      </div>
      {/* Six Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[32%] sm:w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[5].image}
          alt={products[5].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>

          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[5].title}
            </h3>
            <p className="text-sm text-gray-600">{products[5].description}</p>
          </div>
        </div>
      </div>
      {/* Seventh Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[66%] md:[40%] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[6].image}
          alt={products[6].title}
          className="rounded-lg mb-4"
        />
        <div className="flex justify-start gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>
          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[6].title}
            </h3>
            <p className="text-sm text-gray-600 md:pe-[40%] pe-0">
              {products[6].description}
            </p>
          </div>
        </div>
      </div>

      {/* Eight Card */}
      <div
        className="flex flex-col items-center bg-white rounded-lg p-2 lg:w-[32%] md:[40%] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={products[7].image}
          alt={products[7].title}
          className="rounded-lg mb-4"
        />
        <div className="flex gap-4">
          <div className="bg-primary p-4 md:h-[5.3rem] md:w-[5.3rem] h-[4.5rem] w-[4.5rem] aspect-square rounded-full text-white text-[2.2rem] flex items-center justify-center">
            <GoArrowUpRight />
          </div>
          <div>
            <h3 className="text-md font-normal md:text-[1.4rem] text-xl leading-5 tracking-tight pb-3">
              {products[7].title}
            </h3>
            <p className="text-sm text-gray-600">{products[7].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProducts;
