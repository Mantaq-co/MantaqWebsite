import Row from "../utils/Row";
import React from "react";

function AboutMantaq() {
  return (
    <Row>
      <section
        className="pb-10 md:pb-20 pt-10"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        id="about"
      >
        <div className="flex flex-col  items-center">
          <p className="text-primary font-semibold text-sm mb-3">
            About Mantaq
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-poppins mb-10">
            Driven by <span className="text-primary">Logic</span>, Built for
            Impact
          </h2>
          <p className="mb-5 md:mb-7 text-center md:text-left text-secondary max-w-[700px]">
            Mantaq is a team of experts in technology, design, and business,
            working together to create exceptional digital products. We are
            committed to delivering the best solutions for our clients and
            partners.
          </p>
          <p className=" text-secondary text-center md:text-left max-w-[700px]">
            Our team is made up of professionals with diverse backgrounds and
            expertise. We are passionate about technology and innovation, and we
            are always looking for new ways to help our clients grow and
            succeed.
          </p>
        </div>
      </section>
    </Row>
  );
}

export default AboutMantaq;
