import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import Box from "./Box";
import shuffleArray from "lodash/shuffle";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AnimationSix = () => {
  const [colors, setColors] = useState([
    "#7d70db",
    "#70d5db",
    "#70db92",
    "#dbaa70",
    "#db8370",
    "#db70da",
  ]);

  const shuffle = () => setColors(shuffleArray);

  return (
    <>
      <Button onClick={shuffle}>Shuffle</Button>
      <Wrapper>
        {colors.map((color) => (
          <Box layout key={color} color={color}>
            {color}
          </Box>
        ))}
      </Wrapper>
    </>
  );
};

export default AnimationSix;
