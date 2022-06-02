import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Background = styled.div`
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ theme: { colors }, color }) => `${colors[color]}40`};
  border-radius: ${({ size }) => `${size / 2}px`};
  position: relative;
  cursor: pointer;
`;

const Circle = motion(styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ theme: { colors }, color }) => `${colors[color]}`};
  border-radius: ${({ size }) => `${size / 2}px`};
  position: absolute;
`);

const Switch = ({ size = 40, color = "pink", isOn = false, toggle }) => {
  return (
    <Background size={size} color={color} onClick={toggle}>
      <Circle
        size={size}
        color={color}
        layout
        animate={{
          left: isOn ? `${size}px` : 0,
        }}
      />
    </Background>
  );
};

export default Switch;
