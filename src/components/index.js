import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
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

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000000;
  z-index: 10;
  opacity: ${({ opacity }) => opacity / 100};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  & h4 {
    margin: 0;
    font-size: 20px;
  }
  & .close {
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: 20px;
  }
`;
