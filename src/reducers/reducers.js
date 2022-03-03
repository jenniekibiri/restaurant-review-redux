import {
  
  CHANGE_RATING,
  REQUEST_PLACES_FAILED,
  REQUEST_PLACES_PENDING,
  REQUEST_PLACES_SUCCESS,
  CLEAR_FILTER,
  
} from "../actions/actionTypes";
const intialState = {
  
  dataLoaded: false,
  error: "",
  ratings: [],
  minRating: 0,
  ratingClicked: false,
};


export const ratingChanged = (state = intialState, action) => {
 
  switch (action.type) {
    case CHANGE_RATING:
      return {
        ...state,
        minRating: action.payload.minRating,
        ratingClicked: action.payload.ratingClicked,
      };
      case CLEAR_FILTER:
        return {
          ...state,
          minRating: action.payload.minRating,
          ratingClicked: action.payload.ratingClicked,
        };
    default:
      return state;
  }
};
export const requestPlaces = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST_PLACES_PENDING:
      return {
        ...state,
        dataLoaded: false,
      };
    case REQUEST_PLACES_SUCCESS:
      return {
        ...state,
        dataLoaded: true,
        ratings: action.payload,
      };
    case REQUEST_PLACES_FAILED:
      return {
        ...state,
        dataLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  };
}

