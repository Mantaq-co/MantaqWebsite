import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { useModalContext } from "../context/modalContext";
import { CSSTransition } from "react-transition-group";

function MobileNav() {
  const { showMobileNav, toggleShowMobileNav } = useModalContext();
  return (
    <>
      <CSSTransition
        in={showMobileNav}
        timeout={300}
        classNames="card"
        unmountOnExit
      >
        <BrowserRouter>
          <div className="bg-white w-[80%] py-10 px-6  md:hidden shadow-sm rounded-lg absolute top-26 z-[20]">
            <ul className="flex flex-col justify-center items-center">
              <li className=" mb-6">
                <NavLink
                  to="/"
                  className="py-3 px-12 mobile-link block text-center rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={toggleShowMobileNav}
                >
                  About
                </NavLink>
              </li>
              <li className=" mb-6 ">
                <NavLink
                  to="/about"
                  className="py-3 px-12 mobile-link block text-center rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={toggleShowMobileNav}
                >
                  Services
                </NavLink>
              </li>
              <li className="  mb-6">
                <NavLink
                  to="/projects"
                  className="py-3 px-12 mobile-link block text-center rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={toggleShowMobileNav}
                >
                  Testimonials
                </NavLink>
              </li>
              <li className="  mb-6 ">
                <NavLink
                  to="https://medium.com/@shahabmalik227710"
                  target="_blank"
                  className="py-3 px-12 mobile-link block text-center   rounded-lg bg-white border-2 text-primary border-primary font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  onClick={toggleShowMobileNav}
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
