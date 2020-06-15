import chroma from "chroma-js";

export const filterOpts = [
  "none",
  "warm",
  "cool",
  "grayscale",
  "reds",
  "oranges",
  "yellows",
  "greens",
  "blues",
  "violets",
];

export const sortOpts = ["none", "hue", "luminance"];

const getHue = (color) => {
  const hue = chroma(color).hsl()[0];
  return isNaN(hue) ? -1 : hue;
};

export const sortColors = (sortBy) => (a, b) => {
  switch (sortBy) {
    case "hue":
      return getHue(b) - getHue(a);
    case "luminance":
      return chroma(b).luminance() - chroma(a).luminance();
    default:
      return 0;
  }
};

export const filterColors = (filterBy) => (color) => {
  const hue = chroma(color).hcl()[0];
  switch (filterBy) {
    case "reds":
      return isNaN(hue) ? false : hue < 41 || hue > 360;
    case "oranges":
      return isNaN(hue) ? false : hue >= 42 && hue < 72;
    case "yellows":
      return isNaN(hue) ? false : hue >= 80 && hue < 105;
    case "greens":
      return isNaN(hue) ? false : hue >= 120 && hue < 165;
    case "blues":
      return isNaN(hue) ? false : hue >= 265 && hue < 290;
    case "violets":
      return isNaN(hue) ? false : hue >= 310 && hue < 317;
    case "warm":
      return isNaN(hue) ? false : hue < 109 || hue > 328;
    case "cool":
      return isNaN(hue) ? false : hue >= 109 && hue <= 328;
    case "grayscale":
      return isNaN(hue);
    case "none":
    default:
      return true;
  }
};

export const getTextColor = (color) => {
  const luminance = chroma(color).luminance();
  return luminance > 0.1
    ? chroma(color).luminance(luminance * 0.5)
    : chroma(color).luminance(luminance + 0.1);
};
