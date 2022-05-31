import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Breadcrumb from "../../components/Breadcrumb";
import AnimationFive from "./AnimationFive";
import AnimationFour from "./AnimationFour";
import AnimationOne from "./AnimationOne";
import AnimationThree from "./AnimationThree";
import AnimationTwo from "./AnimationTwo";

const Wrapper = styled.div`
  padding: 0 2.5rem;
  & > * {
    margin-bottom: 50px;
  }
`;

const Animations = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Animations</Breadcrumb.Item>
      </Breadcrumb>
      <Wrapper>
        <AnimationOne />
        <AnimationTwo />
        <AnimationThree />
        <AnimationFour />
        <AnimationFive />
      </Wrapper>
    </>
  );
};

export default Animations;
