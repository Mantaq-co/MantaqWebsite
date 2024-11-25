import Row from "../utils/Row";
import React from "react";

function HeroSection() {
  return (
    <Row>
      <section className="py-10 md:py-20" data-aos="fade-up">
        <div className="flex flex-col justify-items-center items-center">
          <div className="max-w-[700px] flex flex-col justify-center items-center">
            <h1 className=" text-4xl text-center  md:text-6xl font-bold text-poppins ">
              Unlocking Innovation with Mantaq: Your Partner in{" "}
              <span className="text-primary">Intelligent Growth</span>
            </h1>
            <p className="my-7 text-center text-secondary">
              We are a team of experts in technology, design, and business,
              working together to create exceptional digital products.
            </p>
            <a
              href="https://calendly.com/mantaq-co/30min"
              target="blank"
              className="bg-primary text-white px-6 py-2 rounded-full border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-1000"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </Row>
  );
}

export default HeroSection;
