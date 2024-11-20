import Row from "./Row";
import CustomNavLink from "./CustomNavLink";
import mantaqLogo from "../assets/mantaqLogo.png";
import React from "react";
import { useModalContext } from "../context/modalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";

function Nav() {
  const { showMobileNav, toggleShowMobileNav } = useModalContext();
  return (
    <Row>
      <nav className="flex justify-between items-center">
        <img src={mantaqLogo} alt="Mantaq Logo" width="120" />
        {!showMobileNav && (
          <FontAwesomeIcon
            icon={faBars}
            className="md:hidden cursor-pointer fade-in"
            size="2xl"
            onClick={toggleShowMobileNav}
          />
        )}
        {showMobileNav && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="md:hidden cursor-pointer rotate-in-center"
            size="2xl"
            onClick={toggleShowMobileNav}
          />
        )}
        <div className="hidden md:flex space-x-16">
          <CustomNavLink url="#about">About</CustomNavLink>
          <CustomNavLink url="#services">Services</CustomNavLink>
          <CustomNavLink url="#testimonials">Testimonials</CustomNavLink>
          <CustomNavLink url="#faqs">Faqs</CustomNavLink>
        </div>
        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-full border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-1000">
          Contact Us
        </button>
      </nav>
      <MobileNav />
    </Row>
  );
}

export default Nav;
