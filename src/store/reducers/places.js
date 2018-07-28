import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";
import placeImage from "../../assets/sea.jpg";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      alert(JSON.stringify(action.location));
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri: action.image.uri
          },
          location: action.location
        })
      };
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
