import Row from "../utils/Row";
import React from "react";
import webAppImage from "../assets/web_app_icon.svg";
import mobileAppImage from "../assets/mobile_app_icon.svg";
import uiuxImage from "../assets/uiux_icon.svg";
function Services() {
  return (
    <Row>
      <section
        className="pb-10 md:pb-20 pt-10"
        data-aos="fade-down"
        id="services"
      >
        <div className="flex flex-col items-center">
          <p className="text-primary font-semibold text-sm mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-poppins mb-10 max-w-[600px]">
            Services Tailored to Drive Your{" "}
            <span className="text-primary">Vision</span> Forward
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <img
              src={webAppImage}
              className="w-10 h-10"
              alt="Web Development"
            />
            <h3 className="text-2xl font-semibold text-poppins my-5">
              Web Development
            </h3>
            <p className="text-secondary text-center max-w-[300px]">
              We design and develop custom websites that are tailored to your
              brand and business needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={mobileAppImage}
              className="w-10 h-10"
              alt="App Development"
            />
            <h3 className="text-2xl font-semibold text-poppins my-5">
              App Development
            </h3>
            <p className="text-secondary text-center max-w-[300px]">
              We create mobile applications that are user-friendly and
              innovative.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={uiuxImage} className="w-10 h-10" alt="UI/UX Design" />
            <h3 className="text-2xl font-semibold text-poppins my-5">
              UI/UX Design
            </h3>
            <p className="text-secondary text-center max-w-[300px]">
              We design user interfaces that are intuitive and visually
              appealing.
            </p>
          </div>
        </div>
      </section>
    </Row>
  );
}

export default Services;
