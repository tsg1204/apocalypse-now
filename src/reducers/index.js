import _ from "lodash";
import { FETCH_ASTEROIDS, FETCH_DAILY_IMAGE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ASTEROIDS:
      return action.payload.data.near_earth_objects//_.mapKeys(action.payload.data.near_earth_objects, "id");
    case FETCH_DAILY_IMAGE:
      return //{ ...state, [action.payload.??]: action.payload };
    default:
      return state;
  }
}