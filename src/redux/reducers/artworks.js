import { GET_ARTWORK, ERROR, IS_LOADING, SET_FAVORITES } from "../../constants";

export const initialState = {
  items: [], // Fetch Data
  favorites: {}, // ID's of Products
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_ARTWORK:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
};
