import React, { useState } from "react";
import { Center } from "../components";
import styled from "styled-components";
import Accordion from "../components/Accordion";

const Wrapper = styled.div`
  width: 95%;
  max-width: 500px;
`;

const AccordionPage = () => {
  const [open, setOpen] = useState(1);

  const toggle = (accordionId) => {
    if (open === accordionId) setOpen(0);
    else setOpen(accordionId);
  };

  return (
    <Center>
      <Wrapper>
        <Accordion open={open} toggle={toggle}>
          <Accordion.Item targetId={1}>
            <Accordion.Header>
              Ad in velit esse esse incididunt culpa qui.
            </Accordion.Header>
            <Accordion.Body>
              Exercitation in dolore ea cupidatat. Nulla ullamco labore ut
              mollit aliqua Lorem qui eiusmod esse sint magna qui. Officia eu
              velit anim minim tempor et velit. Sit laborum velit voluptate id
              adipisicing. Lorem et sunt proident laboris esse. Qui qui in
              veniam voluptate eiusmod consequat minim aute nulla commodo eu ad
              ut occaecat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item targetId={2}>
            <Accordion.Header>
              Duis ipsum reprehenderit enim aliquip.
            </Accordion.Header>
            <Accordion.Body>
              Velit ut velit culpa dolore sit sunt tempor reprehenderit eiusmod
              tempor. Cupidatat ad aliqua ut nulla proident amet laboris.
              Excepteur enim tempor sit nulla cillum aliquip sint nisi elit ad
              proident.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    </Center>
  );
};

export default AccordionPage;
