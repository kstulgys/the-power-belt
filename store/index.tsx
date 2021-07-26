import { proxy, useSnapshot } from "valtio";

const state = proxy({ beltSize: "L", beltColor: "black", beltStitchedColor: "red" });

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
