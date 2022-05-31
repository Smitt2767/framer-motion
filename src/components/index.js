import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ color = "palevioletred" }) => `${color}`};
  border: 0;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;
