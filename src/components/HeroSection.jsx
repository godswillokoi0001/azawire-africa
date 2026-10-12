import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative z-10 mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-8 px-6 pb-6 pt-12 sm:px-8 md:grid-cols-2 md:gap-4 md:pb-8 md:pt-24 lg:px-9 lg:pt-28">
      <div className="order-2 relative z-10 space-y-6 text-left md:order-1">
        <h1 className="font-sora text-3xl font-bold leading-[1.16] tracking-tighter text-[#252C34] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.3]">
          Bank Without Borders with Azawire&apos;s Web3 Solution
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
          Get paid globally, spend crypto like cash, auto-convert stablecoins,
          and transact offline—all in one platform.
        </p>
        <Link
          to="/waitlist"
          className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-primary px-8 py-4 font-poppins text-base text-white transition-colors duration-300 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-64 sm:text-lg"
        >
          Join Waitlist
          <span className="pl-2">
            <img
              className="w-5"
              src="/images/icons/Icons.svg"
              alt=""
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>

      <div className="order-1 relative flex w-full items-center justify-center md:order-2 md:min-h-[420px]">
        <img
          src="/images/new-coins.png"
          alt="3D illustrations of Azawire, dollar, and stablecoin tokens"
          className="relative z-10 h-auto w-full max-w-[38rem] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
