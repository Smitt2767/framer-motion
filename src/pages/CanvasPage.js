import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Center } from "../components";
import Breadcrumb from "../components/Breadcrumb";
import Canvas from "../components/Canvas";

const CanvasPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Canvas</Breadcrumb.Item>
      </Breadcrumb>
      <Center>
        <Button onClick={toggle}>Open</Button>
        <Canvas isOpen={isOpen} toggle={toggle}>
          <Canvas.Header>Minim cupidatat</Canvas.Header>
          <Canvas.Body>
            Consectetur pariatur id voluptate pariatur voluptate veniam ex
            excepteur elit esse ad culpa veniam aute. In cillum elit quis
            nostrud ipsum elit exercitation proident eu ullamco ullamco ea.
            Aliquip do commodo anim laboris velit laborum reprehenderit Lorem
            cupidatat reprehenderit voluptate dolor deserunt minim. Laboris
            mollit dolor proident duis laborum dolore sint elit et in irure duis
            labore. Sint adipisicing reprehenderit irure in. Incididunt
            consectetur minim elit ad id sint adipisicing pariatur dolor do
            Lorem incididunt. Cillum est qui proident mollit eu deserunt ad
            ullamco reprehenderit. Officia nisi in sint aliqua occaecat labore
            cillum eu.
          </Canvas.Body>
          <Canvas.Footer>
            <Button color="#e92828" onClick={toggle}>
              Close
            </Button>
            <Button color="#4c47d2">Submit</Button>
          </Canvas.Footer>
        </Canvas>
      </Center>
    </>
  );
};

export default CanvasPage;
