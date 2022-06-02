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
        <Button onClick={onMoveRight} color="blue">
          Move Right
        </Button>
        <Button onClick={onCircle} color="skyBlue">
          Circle
        </Button>
        <Button onClick={onSquare} color="green">
          Square
        </Button>
        <Button onClick={control.stop} color="orange">
          Stop
        </Button>
      </ButtonContainer>
      <Box animate={control}>5</Box>
    </>
  );
};

export default AnimationFive;
