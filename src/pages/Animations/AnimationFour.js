import React from "react";
import Box from "./Box";

const AnimationFour = () => {
  return (
    <Box
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        borderRadius: ["0%", "10%", "50%", "50%", "10%"],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{
        duration: 2,
      }}
    >
      4
    </Box>
  );
};

export default AnimationFour;
