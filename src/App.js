import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import styled from "styled-components";
import { colors } from "./utils/colors";
import Swatch from "./components/Swatch";
import Select from "./components/Select";
import { filterOpts, sortOpts, sortColors, filterColors } from "./utils/lib";

const H1 = styled.h1`
  display: inline-block;
  font-size: 8rem;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, violet);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 0.25rem;
`;
const ColorContainer = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;
`;
const SelectContainer = styled.div`
  margin-bottom: 1rem;
`;

const App = () => {
  const [filterBy, setFilter] = useState(filterOpts[0]);
  const [sortBy, setSort] = useState(sortOpts[0]);
  return (
    <>
      <GlobalStyles />
      <H1>Colors</H1>
      <SelectContainer>
        <Select
          label={"Filter"}
          onChange={(e) => setFilter(e.target.value)}
          options={filterOpts}
          value={filterBy}
        />
        <Select
          style={{ marginLeft: 10 }}
          label={"Sort"}
          onChange={(e) => setSort(e.target.value)}
          options={sortOpts}
          value={sortBy}
        />
      </SelectContainer>
      <ColorContainer>
        {colors
          .filter(filterColors(filterBy))
          .sort(sortColors(sortBy))
          .map((color, i) => {
            return <Swatch key={i} color={color} />;
          })}
      </ColorContainer>
    </>
  );
};

export default App;
