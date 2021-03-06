import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled.div`
  height: 200px;
  width: 200px;
  min-height: 200px;
  min-width: 200px;
  cursor: pointer;
  background-color: ${({ theme: { colors }, color = "green" }) =>
    `${colors[color] ? colors[color] : color}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  flex-direction: column;
  gap: 15px;
`;

export const SmallBox = motion(styled.div`
  height: 20px;
  width: 20px;
  background-color: #fff;
`);

export default motion(Box);
