import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { colors } from "./utils/colors";
import { filterOpts, sortOpts, colorSort, colorFilter } from "./utils/lib";

function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Colors</h1>
    </div>
  );
}

export default App;
