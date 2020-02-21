import { combineReducers } from "redux";
import AsteroidsReducer from "./reducer-asteroids";
import ImageReducer from "./reducer-image";


const rootReducer = combineReducers({
  asteroids: AsteroidsReducer,
  image: ImageReducer
});

export default rootReducer;

