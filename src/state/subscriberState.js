import { atom } from "recoil";

const subscriberState = atom({
  key: "subscriberState",
  default: null,
});

export default subscriberState;