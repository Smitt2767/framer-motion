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
  ${({ selected, color, theme: { colors } }) => css`
    background-color: ${selected ? `${colors[color]}cc` : `transparent`};
    color: ${selected ? "#fff" : colors[color]};
  `};
`;

const BottomLine = motion(styled.div`
  border-top: ${({ theme: { colors }, color }) => `3px solid ${colors[color]}`};
  width: 100%;
`);
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
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

      {selected && (
        <BottomLine layoutId="underline" selected={selected} color={color} />
      )}
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
