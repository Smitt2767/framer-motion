import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext } from "react";
import styled from "styled-components";
import { Backdrop, HeaderWrapper } from ".";
import { GrClose } from "react-icons/gr";

const canvasContext = createContext();

const Box = motion(styled.div`
  background-color: #fff;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 400px;
  width: 100%;
  z-index: 20;
  height: 100vh;
  display: flex;
  flex-direction: column;
`);

const BodyWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 15px;
  flex-grow: 1;
`;

const FooterWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

const Header = ({ children, closeButton = true }) => {
  const { toggle } = useContext(canvasContext);
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

const Footer = ({ children }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

const variants = {
  close: { x: "100%" },
  open: { x: 0 },
};

const Canvas = ({ isOpen, toggle, backdrop = 30, children }) => {
  return (
    <canvasContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            <Box
              variants={variants}
              initial="close"
              animate="open"
              exit="close"
              transition={{
                dumping: 300,
              }}
            >
              {children}
            </Box>
            <Backdrop opacity={backdrop} onClick={toggle} />
          </>
        )}
      </AnimatePresence>
    </canvasContext.Provider>
  );
};

Canvas.Header = Header;
Canvas.Body = Body;
Canvas.Footer = Footer;

export default Canvas;
