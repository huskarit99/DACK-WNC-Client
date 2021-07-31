import { atom } from "recoil";

const roleState = atom({
  key: "roleState",
  default: "guest",
});

export default roleState;