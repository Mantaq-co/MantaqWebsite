import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { useModalContext } from "../context/modalContext";
import { CSSTransition } from "react-transition-group";

function MobileNav() {
  const { showMobileNav, toggleShowMobileNav } = useModalContext();

  const handleClick = (event, url) => {
    if (url.startsWith("#")) {
      event.preventDefault(); // Prevent default navigation.
      const section = document.querySelector(url); // Find the target element.
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly.
      }
    }
    toggleShowMobileNav(); // Ensure this runs outside the `if` block.
  };

  return (
    <>
      <CSSTransition
        in={showMobileNav}
        timeout={300}
        classNames="card"
        unmountOnExit
      >
        <BrowserRouter>
          <div className="bg-white w-[80%] ml-[5%] py-10 px-6  md:hidden shadow-md rounded-lg absolute top-26 z-[20]">
            <ul className="flex flex-col justify-center items-center">
              <li className=" mb-6">
                <NavLink
                  to="#about"
                  className="py-3 px-12 mobile-link block text-center rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={(event) => {
                    handleClick(event, "#about");
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className=" mb-6 ">
                <NavLink
                  to="#services"
                  className="py-3 px-12 mobile-link block text-center rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={(event) => {
                    handleClick(event, "#services");
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="#testimonials"
                  className="py-3 px-12 mobile-link block text-center   rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={(event) => {
                    handleClick(event, "#testimonials");
                  }}
                >
                  Testimonials
                </NavLink>
              </li>
              <li className="  mb-6 ">
                <NavLink
                  to="#faqs"
                  className="py-3 px-12 mobile-link block text-center   rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={(event) => {
                    handleClick(event, "#faqs");
                  }}
                >
                  Faqs
                </NavLink>
              </li>
              <li className=" ">
                <button
                  onClick={() => {
                    toggleShowMobileNav();
                  }}
                  className="py-3 px-12 mobile-link block rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </BrowserRouter>
      </CSSTransition>
    </>
  );
}

export default MobileNav;
