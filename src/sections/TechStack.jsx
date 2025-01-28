import Row from "../utils/Row";
import React from "react";
import Demo from "./Demo";

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
        <Demo />
      </section>
    </Row>
  );
}

export default TechStack;
