import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import mantaqLogo from "../assets/mantaqLogo.svg";
import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="pb-[20px] text-center">
      <div className="flex flex-col justify-center items-center">
        <img src={mantaqLogo} className="w-40" />
      </div>

      <div className="flex justify-center items-center mb-3">
        <a
          href="mailto:mantaq.co@gmail.com"
          className="w-[50px] h-[50px] rounded-full border-2 border-primary hover:text-white hover:bg-primary flex justify-center items-center mr-3 bg-white text-primary  transition-all duration-500"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-lg " />
        </a>
        <a
          href="https://www.facebook.com/malik.shahab.351104"
          className="w-[50px] h-[50px] rounded-full border-2 border-primary hover:text-white hover:bg-primary flex justify-center items-center mr-3 bg-white text-primary  transition-all duration-500"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-lg " />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-shahab-malik-4264831b9/"
          className="w-[50px] h-[50px] rounded-full border-2 border-primary hover:text-white hover:bg-primary flex justify-center items-center mr-3 bg-white text-primary  transition-all duration-500"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-lg " />
        </a>
        <a
          href="https://twitter.com/malik_227710"
          className="w-[50px] h-[50px] rounded-full border-2 border-primary hover:text-white hover:bg-primary flex justify-center items-center mr-3 bg-white text-primary  transition-all duration-500"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-lg " />
        </a>
      </div>
      <p className="mt-6 text-md text-secondary">
        Copyright &copy; {currentYear} Mantaq. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
