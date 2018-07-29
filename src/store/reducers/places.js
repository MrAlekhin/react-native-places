import { SET_PLACES, DELETE_PLACE } from "../actions/actionTypes";
import placeImage from "../../assets/sea.jpg";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PLACES:
      return {
        ...state,
        places: action.places
      }

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        }),
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
