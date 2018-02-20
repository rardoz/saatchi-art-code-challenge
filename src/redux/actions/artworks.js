import { GET_ARTWORK, ERROR, IS_LOADING, SET_FAVORITES } from "../../constants";
const localStorage = window.localStorage || {
  getState: () => {},
  getItem: () => {}
};

export const getArtwork = (filter = "") => dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  dispatch(getFavorites());
  fetch("/api/data.json")
    .then(response => response.json())
    .then(
      json =>
        filter
          ? json.filter(
              item => item.artwork_title.toLowerCase().indexOf(filter) > -1
            )
          : json
    )
    .then(json => dispatch({ type: GET_ARTWORK, payload: json }))
    .catch(error => dispatch({ type: ERROR, payload: error }));
};

export const getFavorites = () => dispatch =>
  dispatch({
    type: SET_FAVORITES,
    payload: JSON.parse(localStorage.getItem("favorites") || "{}")
  });

export const addFavorite = artId => (dispatch, getState) => {
  const favorites = { ...getState().artworks.favorites };
  favorites[artId] = true;
  localStorage.setItem("favorites", JSON.stringify(favorites));
  return dispatch({ type: SET_FAVORITES, payload: favorites });
};

export const removeFavorite = artId => (dispatch, getState) => {
  const favorites = { ...getState().artworks.favorites };
  delete favorites[artId];
  localStorage.setItem("favorites", JSON.stringify(favorites));
  return dispatch({ type: SET_FAVORITES, payload: favorites });
};
