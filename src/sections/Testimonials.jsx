import Row from "../utils/Row";
import TestimonialSlider from "../utils/TestimonialSlider";
import React from "react";

function Testimonials() {
  return (
    <Row>
      <section
        className="pb-32 pt-10"
        data-aos="fade-down-right"
        id="testimonials"
      >
        <div className="flex flex-col items-center">
          <p className="text-primary font-semibold text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl text-center font-bold text-poppins mb-10 max-w-[600px]">
            Client Stories: Experiences &nbsp;&nbsp;&nbsp; with
            <span className="text-primary"> Mantaq</span>
          </h2>
        </div>
        <TestimonialSlider />
      </section>
    </Row>
  );
}

export default Testimonials;