import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer"
import detailsReducer from "./detailsReducer"

const reducers = combineReducers({
  MoviesData: moviesReducer,
  DetailsData: detailsReducer
})

export default reducers

export type State = ReturnType<typeof reducers>