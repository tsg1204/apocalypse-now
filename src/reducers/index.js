import _ from "lodash";
import { FETCH_ASTEROIDS, FETCH_DAILY_IMAGE } from "../actions";

export default function(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case FETCH_ASTEROIDS:
      return action.payload.data.near_earth_objects//_.mapKeys(action.payload.data.near_earth_objects, "id");
    case FETCH_DAILY_IMAGE:
    console.log(action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
}
