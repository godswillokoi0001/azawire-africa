
const PaymentCard = () => {
  return (
    <section
      className="px-6 py-4 md:py-8 bg-privariant overflow-hidden font-poppins mt-12"
      style={{
        backgroundImage: "url('/images/background-line-5.png')",
        backgroundSize: "70%",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-white pb-8 leading-8">
                Spend Your Stablecoins with Ease
              </h2>
              <p className="text-base sm:text-lg text-white">
                Azawire empowers you with seamless spending options through our
                physical and virtual off-ramp cards. Enjoy the freedom to spend
                your USDC, USDT, and cNGN directly without relying on
                third-party services. Whether online or in-store, your crypto is
                now as flexible as cash.
              </p>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-white">
                    <span className="font-semibold">Faster Transactions:</span>{" "}
                    Powered by Web3 technology for instant payment
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-white">
                    <span className="font-semibold">Global Acceptance:</span>{" "}
                    Use your card anywhere traditional cards are accepted
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-white">
                    <span className="font-semibold">No Hidden Fees:</span>{" "}
                    Transparent and competitive rates
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-white">
                    <span className="font-semibold">Enhanced Security:</span>{" "}
                    Built-in encryption and fraud protection
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-white">
                    <span className="font-semibold">24/7 Support:</span>{" "}
                    Get assistance whenever you need it
                  </p>
                </li>
              </ul>
            </div>
            {/* Image */}
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="/images/Aza v1 1.png"
                alt="Credit card illustration"
                className="w-full drop-shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
