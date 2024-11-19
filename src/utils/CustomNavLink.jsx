import { NavLink, BrowserRouter } from "react-router-dom";
import React from "react";

function CustomNavLink({ url, children }) {
  const handleClick = (event) => {
    if (url.startsWith("#")) {
      event.preventDefault(); // Prevent default navigation.
      const section = document.querySelector(url); // Find the target element.
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly.
      }
    }
  };

  return (
    <BrowserRouter>
      <NavLink
        className="text-[16px] font-medium hover:text-primary transition-all duration-1000"
        to={url}
        onClick={handleClick}
      >
        {children}
      </NavLink>
    </BrowserRouter>
  );
}

export default CustomNavLink;
