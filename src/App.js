import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import styled from "styled-components";
import { colors } from "./utils/colors";
import { filterOpts, sortOpts, colorSort, colorFilter } from "./utils/lib";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <h1>Colors</h1>
    </div>
  );
};

export default App;
