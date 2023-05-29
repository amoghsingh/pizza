import { actionsTypes } from "../constants/action-types";

const initialState = {
  foodItems: [],
};

export const pizzaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_ALL_PIZZAS:
      return { ...state, foodItems: payload };

    default:
      return state;
  }
};
