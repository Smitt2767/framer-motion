import React, { createContext, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import useOutsideClick from "../hooks/useOutsideClick";
import { Backdrop, HeaderWrapper } from ".";

const sizes = {
  sm: 350,
  md: 500,
  lg: 700,
  xl: 900,
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalBox = motion(styled.div`
  max-width: ${({ size }) => `${sizes[size]}px`};
  width: 95%;
  background-color: #fff;
  border-radius: 5px;
  margin: 5% auto 5% auto;
`);

const BodyWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 15px;
`;

const FooterWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

const modalContext = createContext();

const Header = ({ children, closeButton = true }) => {
  const { toggle } = useContext(modalContext);
  return (
    <HeaderWrapper>
      <h4>{children}</h4>
      {closeButton && (
        <button className="close" onClick={toggle}>
          <GrClose />
        </button>
      )}
    </HeaderWrapper>
  );
};

const Body = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

const variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -100,
  },
};

const Modal = ({ isOpen, toggle, backdrop = 30, size = "md", children }) => {
  const ref = useRef(null);

  useOutsideClick(ref, toggle);

  return (
    <AnimatePresence>
      {isOpen && (
        <modalContext.Provider
          value={{
            toggle,
          }}
        >
          <Wrapper>
            <ModalBox
              ref={ref}
              size={size}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                duration: 0.2,
              }}
            >
              {children}
            </ModalBox>
          </Wrapper>
          <Backdrop opacity={backdrop} />
        </modalContext.Provider>
      )}
    </AnimatePresence>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = FooterWrapper;

export default Modal;
