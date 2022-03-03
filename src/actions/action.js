import {
  CHANGE_RATING,
  REQUEST_PLACES_FAILED,
  REQUEST_PLACES_PENDING,
  REQUEST_PLACES_SUCCESS,
  CLEAR_FILTER,
} from "./actionTypes";

export const setRatingChanged = (minRating, ratingClicked) => ({
  type: CHANGE_RATING,
  payload: {
    minRating,
    ratingClicked,
  },
});
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const setRequestPlaces = () => (dispatch, placeid) => {
  dispatch({ type: REQUEST_PLACES_PENDING });
  fetch(
    proxyurl +
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=name,rating,photo,vicinity,place_id,reviews,formatted_phone_number&key=${process.env.REACT_APP_GoogleMapsApiKey}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    }
  )
    .then((response) => response.json())
    .then((ratings) =>
      dispatch({ type: REQUEST_PLACES_SUCCESS, payload: ratings })
    )
    .catch((err) => dispatch({ type: REQUEST_PLACES_FAILED, payload: err }));
};
const setClearFilter = (minRating, ratingClicked) => ({
  type: CLEAR_FILTER,
  payload: {
    minRating,
    ratingClicked,
  },
});
