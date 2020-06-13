import chroma from "chroma-js";

const colors = [
  "white",
  "pink",
  "cyan",
  "blue",
  "purple",
  "violet",
  "black",
  "red",
  "green",
  "yellow",
  "orange",
  "gray",
  "#222",
  "#111",
  "#999",
  "#efefef",
  "#ccc",
  "#ddd",
  "#aaa",
  "#777",
];

const additional = 400;
for (let i = 0; i < additional; i++) {
  colors.push(chroma.random());
}

export { colors };
