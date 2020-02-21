import { FETCH_ASTEROIDS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ASTEROIDS:
      return action.payload.data.near_earth_objects[action.meta]
    default:
      return state;
  }
}
