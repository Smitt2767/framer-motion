import React, { useState } from "react";
import Box from "./Box";

const variants = {
  move: (isAnimating) => ({
    x: isAnimating ? "80vw" : 0,
    opacity: isAnimating ? 1 : 0.3,
    rotate: isAnimating ? 360 : 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  }),
};

const AnimationOne = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <Box
      custom={isAnimating}
      variants={variants}
      initial={{
        opacity: 0.3,
      }}
      animate="move"
      onClick={() => setIsAnimating((prev) => !prev)}
    >
      1
    </Box>
  );
};

export default AnimationOne;
