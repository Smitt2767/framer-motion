import React, { useState } from "react";
import { Button, Center } from "../components";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Center>
      <Button onClick={toggle}>Open</Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <Modal.Header>Lorem</Modal.Header>
        <Modal.Body>
          Fugiat aliquip cupidatat voluptate laborum esse est. Anim adipisicing
          commodo labore non tempor ullamco qui fugiat ullamco. Non officia duis
          dolore cillum mollit reprehenderit sit veniam deserunt dolore mollit
          amet labore. Ea ea ex labore labore magna mollit. Aute sunt fugiat
          nostrud ullamco. Mollit voluptate et tempor consectetur elit.
        </Modal.Body>
        <Modal.Footer className="">
          <Button color="#e92828" onClick={toggle}>
            Close
          </Button>
          <Button color="#4c47d2">Submit</Button>
        </Modal.Footer>
      </Modal>
    </Center>
  );
};

export default ModalPage;
