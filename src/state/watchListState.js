import { atom } from "recoil";

const watchListState = atom({
  key: "watchListState",
  default: null,
});

export default watchListState;