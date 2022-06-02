import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Center } from "../components";
import Breadcrumb from "../components/Breadcrumb";
import Switch from "../components/Switch";

const SwitchPage = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Switch</Breadcrumb.Item>
      </Breadcrumb>
      <Center>
        <Switch isOn={isOn} toggle={toggle} color="pink" size={50} />
      </Center>
    </>
  );
};

export default SwitchPage;
