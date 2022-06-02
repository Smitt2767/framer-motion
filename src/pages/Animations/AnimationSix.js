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
    "blue",
    "skyBlue",
    "green",
    "orange",
    "#db8370",
    "pink",
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
