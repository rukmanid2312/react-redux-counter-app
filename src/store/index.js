import { createStore } from "redux";

const INTIAL_STATE = { counter: 0 };
const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
export const store = createStore(reducer);
