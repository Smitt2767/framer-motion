import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
import Box from "./Box";
import { useAnimation } from "framer-motion";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AnimationFive = () => {
  const control = useAnimation();
  const onMoveLeft = () => {
    control.start({
      x: 0,
      transition: {
        duration: 1.5,
      },
    });
  };
  const onMoveRight = () => {
    control.start({
      x: "80vw",
      transition: {
        duration: 1.5,
      },
    });
  };
  const onCircle = () => {
    control.start({
      borderRadius: "50%",
      transition: {
        duration: 1,
      },
    });
  };
  const onSquare = () => {
    control.start({
      borderRadius: 0,
      transition: {
        duration: 1,
      },
    });
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={onMoveLeft}>Move Left</Button>
        <Button onClick={onMoveRight} color="#7d70db">
          Move Right
        </Button>
        <Button onClick={onCircle} color="#70d5db">
          Circle
        </Button>
        <Button onClick={onSquare} color="#70db92">
          Square
        </Button>
        <Button onClick={control.stop} color="#dbaa70">
          Stop
        </Button>
      </ButtonContainer>
      <Box animate={control}>5</Box>
    </>
  );
};

export default AnimationFive;
