import { proxy, useSnapshot } from "valtio";

export const beltColors = [
  { color: "white", name: "white" },
  { name: "lightGrey", color: "#BBC2D1" },
  { name: "grey", color: "#7E858E" },
  { name: "sand", color: "#C5C1AA" },
  { name: "buckskin", color: "#9E815F" },
  { name: "rust", color: "#8B4932" },
  { name: "brown", color: "#3A2D2D" },
  { name: "forestGreen", color: "#2A4147" },
  { name: "loden", color: "#657743" },
  { name: "mint", color: "#C0EECD" },
  { name: "lineGreen", color: "#E2ED9F" },
  { name: "yellow", color: "#ECDE7F" },
  { name: "peach", color: "#EDC2A3" },
  { name: "orange", color: "#E8AD6B" },
  { name: "pink", color: "#E9C0CE" },
  { name: "lavender", color: "#B3ACE7" },
  { name: "aqua", color: "#9ADCF6" },
  { name: "turquoise", color: "#5292D7" },
  { name: "royalBlue", color: "#0A32AE" },
  { name: "navyBlue", color: "#111A37" },
  { name: "purple", color: "#4F286F" },
  { name: "maroon", color: "#532732" },
  { name: "red", color: "#CC514B" },
  { name: "fuchsia", color: "#C850AF" },
  { name: "black", color: "#0E161B" },
];

export const beltSizes = ["S", "M", "L", "XL", "2xl"];

const state = proxy({ beltSize: "L", beltColor: beltColors[24], beltStitchedColor: beltColors[22] });

export function useBeltSelection() {
  const snap = useSnapshot(state);
  return {
    snap,
    setBeltColor: (color: string) => {
      state.beltColor = color;
    },
    setBeltStitchedColor: (color: string) => {
      state.beltStitchedColor = color;
    },
    setBeltSize: (size: string) => {
      state.beltSize = size;
    },
  };
}
