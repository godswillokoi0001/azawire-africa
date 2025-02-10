import React, { useEffect, useRef } from "react";
import NavigationBar2 from "../components/NavigationBar2";
import Footer from "../components/Footer";
import JoinOurTeam from "../components/JoinOurTeam";
import { useLocation } from 'react-router-dom';

const teamMembers = [
  {
    name: "Emmanuel Onyo",
    position: "CEO & CO-FOUNDER",
    image: "/images/team/Emmanuel Onyo.png",
  },
  {
    name: "Terry Oyabrade",
    position: "CO-FOUNDER",
    image: "/images/team/Terry Oyabrade.png",
  },
  {
    name: "Njomen U. J. Abdulahi",
    position: "CO-FOUNDER",
    image: "/images/team/Njomen Usman Jnr. Abdulahi.png",
  },
  {
    name: "Ikechukwu Okechukwu",
    position: "CO-FOUNDER",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Daniel Tamunotonye",
    position: "CO-FOUNDER",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Rukayat Mustapha",
    position: "Project Manager",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Victor Udoh",
    position: " Product Designer",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Silas Idowu",
    position: "Mobile Developer",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Johnson L. Onaji",
    position: " Product Designer ",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Godswill Okoi",
    position: "Frontend Developer",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Olawale Hameed",
    position: "Backend Developer",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Jesse Mathias",
    position: "Marketing Manager",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Tega Claire",
    position: "Technical Content Specialist ",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Raaboni Innocent",
    position: "Graphics Designer",
    image: "/images/team/placeholder.png",
  },
];

const About = () => {
  const location = useLocation();
  const teamRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'team' && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <header className="bg-privariant min:h-screen">
        <NavigationBar2 />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-4 py-20 pt-24 md:pt-48">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Left Section */}
            <div className="w-full md:w-[60%] mb-6 md:mb-0">
              <button className="px-4 py-3 text-xl bg-secondary text-white rounded-lg shadow-md mb-4 font-sora">
                About Azawire?
              </button>
              <h1
                className="text-3xl md:text-6xl font-semibold mb-4 text-white font-sora tracking-tight"
                style={{ lineHeight: 1.2 }}
              >
                Azawire is redefining <br /> digital banking with the <br />{" "}
                power of Web3 <br />
                technology
              </h1>
            </div>
            {/* Right Section */}
            <div className="w-full md:w-[40%] text-gray-300 text-lg md:text-[1.5rem] font-inter font-medium leading-9">
              <p className="mb-8">
                Our mission is to bridge the gap between traditional finance and
                decentralized banking, making global payments simpler, faster,
                and more accessible for everyone.
              </p>
              <p>
                We integrate blockchain-powered on-ramp and off-ramp systems,
                stablecoin transactions, virtual card services, and seamless
                payment methods like USSD and WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-4 md:py-20 py-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            {/* Left Section */}
            <div className="w-full md:w-[60%] md:pb-24">
              <h1
                className="text-2xl md:text-4xl font-normal text-gray-800 font-poppins tracking-tighter leading-snug pb-4"
                style={{ lineHeight: 1.5 }}
              >
                Whether you're a freelancer, remote worker, business owner, or
                an individual looking for seamless banking solutions
              </h1>
              <div className="leading-8 tracking-tighter text-gray-600 text-lg md:text-[1.5rem] font-normal md:pr-10">
                <p className="mb-4">
                  Azawire ensures that sending and receiving money—locally or
                  internationally—is effortless and cost-effective.
                </p>
                <p>
                  With Azawire, banking is no longer limited by borders,
                  platforms, or banking hours. It's instant, inclusive, and
                  built for the digital economy.
                </p>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full md:w-[40%]">
              <img
                src="/images/Group 1000001760.png"
                alt="3D Currency Icons"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={teamRef} id="team">
        <div className="py-16 px-6 bg-white font-sora">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Meet our Superstars
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Azawire ensures that sending and receiving money—locally <br /> or
              internationally— is effortless and cost-effective.
            </p>
          </div>
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-12">
            <div className="relative group flex-grow lg:w-[35%]">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full h-auto rounded-[1.8rem] lg:grayscale group-hover:grayscale-0 transition duration-100"
              />
              <div className="absolute bottom-0 right-0 bg-secondary text-white text-center py-2 w-[80%] rounded-tl-3xl">
                <p className="font-semibold text-lg">{teamMembers[0].name}</p>
                <p className="text-sm">{teamMembers[0].position}</p>
              </div>
            </div>
            <div className="flex-grow lg:text-left text-center md:ml-8 lg:w-[75%]">
              <h3
                className="text-2xl md:text-5xl font-sora mb-4 tracking-tight"
                style={{ lineHeight: 1.2 }}
              >
                Behind Azawire is a team of innovators, fintech experts, and
                creatives dedicated to revolutionizing digital banking
              </h3>
              <p className="text-gray-600 md:text-[1.3rem] text-[1rem] tracking-tight md:leading-8">
                We believe in borderless banking solutions, security, and
                seamless transactions for everyone. With a passion for financial
                innovation, we're building the future of banking—one
                milestone at a time.
              </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center md:gap-6 gap-5 lg:space-x-4 lg:max-w-6xl w-full mx-auto mb-12 ">
            {teamMembers.slice(1, 5).map((member, index) => (
              <div key={index} className="relative w-full lg:w-[20%]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto rounded-lg lg:grayscale hover:grayscale-0 transition duration-100"
                />
                <div className="absolute bottom-0 right-0 bg-secondary text-white text-center md:py-1 py-2  w-[80%] rounded-tl-3xl">
                  <p className="font-semibold md:text-sm text-lg">
                    {member.name}
                  </p>
                  <p className="md:text-[0.7rem] text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="max-w-6xl mx-auto mb-4 w-full">
            <div className="flex lg:flex-wrap flex-nowrap overflow-x-auto scrollbar-hide justify-start md:justify-center lg:gap-6 gap-4">
              {teamMembers.slice(5, 15).map((member, index) => (
                <div
                  key={index}
                  className="relative w-[70%] sm:w-[50%] md:w-[180px] flex-shrink-0 snap-start"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto rounded-xl lg:grayscale hover:grayscale-0 transition duration-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-center md:py-1 py-2">
                    <p className="font-semibold md:text-sm text-lg">
                      {member.name}
                    </p>
                    <p className="md:text-[0.7rem] text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fourth Row */}
          {/* <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto content-end">
            {teamMembers.slice(10).map((member, index) => (
              <div key={index} className="relative w-[125px] md:w-[180px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-center md:py-2 py-[0.2rem]">
                  <p className="font-semibold md:text-sm text-[0.6rem]">
                    {member.name}
                  </p>
                  <p className="lg:text-xs text-[0.5rem]">{member.position}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <JoinOurTeam />
      <Footer />
    </>
  );
};

export default About;
