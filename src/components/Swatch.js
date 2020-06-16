import React from "react";
import styled from "styled-components";
import { getTextColor } from "../utils/lib";

const Container = styled.div`
  height: 45px;
  line-height: 45px;
  text-align: left;
  padding-left: 15px;
  font-size: 1.3rem;
`;

const Swatch = ({ color }) => {
  return (
    <Container
      style={{
        background: color,
        color: getTextColor(color),
      }}
    >
      {color}
    </Container>
  );
};

export default Swatch;
