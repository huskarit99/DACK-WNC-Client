import { atom } from "recoil";

const coursesState = atom({
  key: "courseState",
  default: null,
});

const coursesByCategoryIdState = atom({
  key: 'coursesByCategoryIdState',
  default: null
});

const coursesBySearchState = atom({
  key: 'coursesBySearch',
  default: null
});

export {
  coursesState,
  coursesByCategoryIdState,
  coursesBySearchState
}