import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: "",
});

const studentListState = atom({
  key: 'studentListState',
  default: null
});

const teacherListState = atom({
  key: 'teacherListState',
  default: null
});

export {
  userState,
  studentListState,
  teacherListState,
}