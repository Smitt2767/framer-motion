import React from "react";
import styled from "styled-components";

const Breadcrumb = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;

  & li:not(:first-child)::before {
    content: "/";
    margin-right: 10px;
  }
`;

const StyledItem = styled.li`
  text-decoration: none;
  font-size: 16px;
  margin-right: 10px;
`;

Breadcrumb.Item = StyledItem;

export default Breadcrumb;
