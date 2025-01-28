import techStack from "../data/techStack";
import Row from "../utils/Row";
import React from "react";

function TechStack() {
  return (
    <Row>
      <section
        className="pb-10 md:pb-20 pt-10"
        data-aos="fade-up"
        id="techStack"
      >
        <div className="flex flex-col items-center">
          <p className="text-primary font-semibold text-sm mb-3">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-poppins mb-10 max-w-[600px]">
            Cutting-Edge Tech Stack for
            <span className="text-primary"> Impactful</span> Results
          </h2>
        </div>
        <div className="grid mt-10 grid-cols-3 sm:grid-cols-5 gap-8 w-[100%]">
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
      </section>
    </Row>
  );
}

export default TechStack;
