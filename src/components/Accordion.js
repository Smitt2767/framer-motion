import React, { createContext, useContext } from "react";
import styled, { css } from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const accordionContext = createContext();
const accordionItemContext = createContext();

const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  margin: 0;
  padding: 0;

  & .item:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const ItemHeader = styled.p`
  padding: 10px 15px;
  margin: 0;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #0c63e430;
          color: #0c63e4;
          border-bottom: 1px solid #ccc;
        `
      : css``};
`;
const Body = motion(styled.div`
  padding: 10px 15px;
  overflow: hidden;
`);

const AccordionItem = ({ children, targetId }) => {
  return (
    <accordionItemContext.Provider
      value={{
        targetId,
      }}
    >
      <div className="item">{children}</div>
    </accordionItemContext.Provider>
  );
};

const AccordionItemHeader = ({ children }) => {
  const { open, toggle } = useContext(accordionContext);
  const { targetId } = useContext(accordionItemContext);

  const isActive = open === targetId;

  return (
    <ItemHeader isActive={isActive} onClick={toggle.bind(null, targetId)}>
      {children} {!isActive ? <BsChevronDown /> : <BsChevronUp />}
    </ItemHeader>
  );
};

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

const AccordionItemBody = ({ children }) => {
  const { open } = useContext(accordionContext);
  const { targetId } = useContext(accordionItemContext);

  const isActive = open === targetId;

  return (
    <AnimatePresence>
      {isActive && (
        <Body
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{
            damping: 10,
          }}
        >
          {children}
        </Body>
      )}
    </AnimatePresence>
  );
};

const Accordion = ({ children, open, toggle }) => {
  return (
    <accordionContext.Provider
      value={{
        open,
        toggle,
      }}
    >
      <Box>{children}</Box>
    </accordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionItemHeader;
Accordion.Body = AccordionItemBody;

export default Accordion;
