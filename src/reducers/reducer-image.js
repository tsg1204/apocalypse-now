import { FETCH_DAILY_IMAGE } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DAILY_IMAGE:
      return action.payload.data;
    default:
      return state;
  }
}
