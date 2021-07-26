import { proxy, useSnapshot } from "valtio";

export const state = proxy({ isSnipcart: false });

export const setIsSnipcartLoaded = () => {
  state.isSnipcart = true;
};
