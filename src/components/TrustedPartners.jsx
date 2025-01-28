import { motion } from "framer-motion";

const partners = [
  { name: "Vista", logo: "/images/logos/vista.svg" },
  { name: "Sumsub", logo: "/images/logos/sumsub.svg" },
  { name: "cNGN", logo: "/images/logos/cngn.svg" },
  { name: "Stellar", logo: "/images/logos/stellar.svg" },
  { name: "Bantu", logo: "/images/logos/bantu.svg" },
  { name: "Convexity", logo: "/images/logos/convexity.svg" },
  { name: "Sudo", logo: "/images/logos/sudo.svg" },
  { name: "Vista", logo: "/images/logos/vista.svg" },
  { name: "Sumsub", logo: "/images/logos/sumsub.svg" },
  { name: "cNGN", logo: "/images/logos/cngn.svg" },
  { name: "Stellar", logo: "/images/logos/stellar.svg" },
  { name: "Bantu", logo: "/images/logos/bantu.svg" },
  { name: "Convexity", logo: "/images/logos/convexity.svg" },
  { name: "Sudo", logo: "/images/logos/sudo.svg" },
  { name: "Vista", logo: "/images/logos/vista.svg" },
  { name: "Sumsub", logo: "/images/logos/sumsub.svg" },
  { name: "cNGN", logo: "/images/logos/cngn.svg" },
  { name: "Stellar", logo: "/images/logos/stellar.svg" },
  { name: "Bantu", logo: "/images/logos/bantu.svg" },
  { name: "Convexity", logo: "/images/logos/convexity.svg" },
  { name: "Sudo", logo: "/images/logos/sudo.svg" },
];

export default function TrustedPartners() {
  return (
    <div className="max-w-screen-xl mx-auto relative w-full overflow-hidden py-6">
      {/* Title */}
      <h2 className="text-center pb-6 text-xl font-semibold text-gray-600">
        Trusted Partners
      </h2>

      <div className="relative flex w-full items-center overflow-hidden">

        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 24,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
       
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="md:h-12 h-10"
            />
          ))}
        </motion.div>

        {/* Gradient Overlays for Fading Effect */}
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#f9feff] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#e5f9ff] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
