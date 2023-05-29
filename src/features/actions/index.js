import { actionsTypes } from "../constants/action-types";
import api from "../../services/api";

export const fetchAllFoodItems = () => async (dispatch) => {
  let response = await api.get("/pizzas");
  dispatch({ type: actionsTypes.FETCH_ALL_PIZZAS, payload: response });
};
