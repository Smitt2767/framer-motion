import { motion } from "framer-motion";
import React, { createContext, useContext } from "react";
import styled, { css } from "styled-components";

const tabContext = createContext();

const TabButton = styled.button`
  min-width: 100px;
  width: 100%;
  cursor: pointer;
  border: 0;
  padding: 10px 20px;
  font-weight: 600;
  background-color: transparent;
  ${({ selected, color, theme: { colors } }) => css`
    color: ${selected ? "#fff" : colors[color]};
  `};
  z-index: 10;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ButtonBG = motion(styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors }, color }) => `${colors[color]}`};
  z-index: 5;
`);
const TabsContainer = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme: { colors }, color }) => `${colors[color]}40`};
`;

const Tab = ({ children, value }) => {
  const { selectedTab, color, onChange } = useContext(tabContext);

  const handleButtonClick = () => {
    onChange(value);
  };

  const selected = value === selectedTab;

  return (
    <ButtonContainer>
      <TabButton selected={selected} color={color} onClick={handleButtonClick}>
        {children}
      </TabButton>

      {selected && <ButtonBG layoutId="bg" selected={selected} color={color} />}
    </ButtonContainer>
  );
};

const Tabs = ({ value, onChange, children, color = "pink" }) => {
  return (
    <tabContext.Provider
      value={{
        selectedTab: value,
        onChange,
        color,
      }}
    >
      <TabsContainer color={color}>{children}</TabsContainer>
    </tabContext.Provider>
  );
};

Tabs.Tab = Tab;

export default Tabs;
