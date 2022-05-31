import React from "react";
import Box, { SmallBox } from "./Box";

const parentVariants = {
  hidden: {
    opacity: 0,
    rotate: 0,
  },
  visible: {
    rotate: 360,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AnimationThree = () => {
  return (
    <Box variants={parentVariants} animate="visible" initial="hidden">
      {[...Array(3).keys()].map((id) => (
        <SmallBox key={id} variants={childVariants} />
      ))}
    </Box>
  );
};

export default AnimationThree;
