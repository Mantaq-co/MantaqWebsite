import React from "react";
import techStack from "../../data/techStack";

export default function Skills() {
  return (
    <div
      data-aos="fade-up"
      className="grid mt-10 grid-cols-3 sm:grid-cols-5 gap-8 w-[100%]"
    >
      {techStack.map((skill) => (
        <div className="flex flex-col justify-start items-center">
          <img
            src={skill.img} // if images are in 'public', use path relative to the public folder, e.g., '/images/techstack.png'
            alt={skill.name}
            className="grayscale w-16 h-16 hover:grayscale-0 transition-all duration-1000"
          />
          <p className="text-secondary mt-3 font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
