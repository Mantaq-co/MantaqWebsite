// components/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Great service, really happy with the results!",
    position: "CEO, Company A",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing experience, highly recommended!",
    position: "CTO, Company B",
  },
  {
    name: "Mike Johnson",
    feedback: "Exceeded my expectations, will use again.",
    position: "Manager, Company C",
  },
  {
    name: "Emily Davis",
    feedback: "High quality work and great support!",
    position: "Director, Company D",
  },
  {
    name: "Chris Lee",
    feedback: "Very satisfied with the delivery and professionalism.",
    position: "Owner, Company E",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section ">
      <div className="container mx-auto px-4">
        <Slider {...settings} className="custom-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
                <p className="text-gray-700 text-lg mb-4">
                  "{testimonial.feedback}"
                </p>

                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-primary ${
                        index < 4 ? "mr-1" : ""
                      } text-xl`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
