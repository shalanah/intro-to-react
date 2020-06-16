import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import styled from "styled-components";
import { colors } from "./utils/colors";
import Swatch from "./components/Swatch";
import { filterOpts, sortOpts, sortColors, filterColors } from "./utils/lib";

const H1 = styled.h1`
  display: inline-block;
  font-size: 8rem;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, violet);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 0.25rem;
  transition: 0.2s;
  :hover {
    font-size: 20rem;
  }
`;

const App = () => {
  const [filterBy, setFilter] = useState(filterOpts[0]);
  const [sortBy, setSort] = useState(sortOpts[0]);
  return (
    <>
      <GlobalStyles />
      <H1>Colors</H1>
      <div>
        <span>Filter: </span>
        <select value={filterBy} onChange={(e) => setFilter(e.target.value)}>
          {filterOpts.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span>Sort: </span>
        <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
          {sortOpts.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          border: "1px solid #000",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {colors
          .filter(filterColors(filterBy))
          .sort(sortColors(sortBy))
          .map((color, i) => {
            return <Swatch color={color} key={i} />;
          })}
      </div>
    </>
  );
};

export default App;
