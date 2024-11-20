import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const toggleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <ModalContext.Provider value={{ showMobileNav, toggleShowMobileNav }}>
      {children}
    </ModalContext.Provider>
  );
}
