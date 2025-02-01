import React from "react";

const MeetOurSuperStars = () => {
  const teamMembers = [
    { name: "Emmanuel Onyo", position: "CO-FOUNDER & CEO", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "CO-FOUNDER", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "CO-FOUNDER", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "CO-FOUNDER", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "CO-FOUNDER", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
    { name: "Emmanuel Onyo", position: "FRONT-END DEV.", image: "/images/team1.png" },
  ];

  return (
    <div className="py-16 px-6 bg-white font-sora">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Meet our Superstars</h2>
        <p className="text-lg md:text-xl text-gray-600">
          Azawire ensures that sending and receiving money—locally or internationally—
          is effortless and cost-effective.
        </p>
      </div>
      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-12">
        <div className="relative group flex-grow lg:w-[35%]">
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="w-full h-auto rounded-[1.8rem] grayscale group-hover:grayscale-0 transition duration-300"
          />
          <div className="absolute bottom-0 right-0 bg-secondary text-white text-center py-2 w-[80%] rounded-tl-3xl">
            <p className="font-semibold text-lg">{teamMembers[0].name}</p>
            <p className="text-sm">{teamMembers[0].position}</p>
          </div>
        </div>
        <div className="flex-grow lg:text-left text-center md:ml-8 lg:w-[75%]">
          <h3 className="text-3xl md:text-5xl font-sora mb-4 tracking-tight" 
            style={{lineHeight: 1.3}}
          >
            We are an exceptional <br /> Team of whatever
          </h3>
          <p className="text-gray-600 text-[1.1rem] tracking-tight leading-8">
            Azawire ensures that sending and receiving money—locally or internationally <br /> —
            is effortless and cost-effective.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-6 lg:space-x-4 max-w-6xl mx-auto mb-12">
        {teamMembers.slice(1, 5).map((member, index) => (
          <div key={index} className="relative w-[150px] md:w-[40%] lg:w-[20%]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition duration-300"
            />
            <div className="absolute bottom-0 right-0 bg-secondary text-white text-center md:py-2 py-[0.2rem] w-[80%] rounded-tl-3xl ">
              <p className="font-semibold md:text-sm text-[0.7rem]">{member.name}</p>
              <p className="lg:text-xs text-[0.7rem]">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row */}
      <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto mb-4 w-full">
        {teamMembers.slice(5, 10).map((member, index) => (
          <div key={index} className="relative w-[120px] md:w-[180px]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-center md:py-2 py-[0.2rem]">
              <p className="font-semibold md:text-sm text-[0.7rem]">{member.name}</p>
              <p className="lg:text-xs text-[0.7rem]">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fourth Row */}
<div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto content-end">
  {teamMembers.slice(10).map((member, index) => (
    <div key={index} className="relative w-[120px] md:w-[180px]">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-center md:py-2 py-[0.2rem]">
        <p className="font-semibold md:text-sm text-[0.7rem]">{member.name}</p>
        <p className="lg:text-xs text-[0.7rem]">{member.position}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default MeetOurSuperStars;
