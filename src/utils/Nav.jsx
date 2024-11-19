import Row from "./Row";
import CustomNavLink from "./CustomNavLink";
import mantaqLogo from "../assets/mantaqLogo.png";
import React from "react";

function Nav() {
  return (
    <Row>
      <nav className="flex justify-between items-center">
        <img src={mantaqLogo} alt="Mantaq Logo" width="120" />
        <div className="flex space-x-16">
          <CustomNavLink url="#about">About</CustomNavLink>
          <CustomNavLink url="#services">Services</CustomNavLink>
          <CustomNavLink url="#testimonials">Testimonials</CustomNavLink>
          <CustomNavLink url="#faqs">Faqs</CustomNavLink>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-full border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-1000">
          Contact Us
        </button>
      </nav>
    </Row>
  );
}

export default Nav;
