import React from "react";
import Box from "./Box";

const AnimationTwo = () => {
  return (
    <Box
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
      }}
      drag
      dragConstraints={{
        left: -10,
        top: -10,
        right: 30,
        bottom: 10,
      }}
    >
      2
    </Box>
  );
};

export default AnimationTwo;
