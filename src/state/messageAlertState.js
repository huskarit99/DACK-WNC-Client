import { atom } from "recoil";

const messageAlertState = atom({
  key: 'messageAlertState',
  default: ''
});

export default messageAlertState