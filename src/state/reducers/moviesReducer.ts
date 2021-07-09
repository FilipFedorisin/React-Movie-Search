import { Action, MoviesData, moviesActionType  } from "../_types/moviesTypes"

const initialState: MoviesData = {
  Loading: true,
  List: []
}

const reducer = (state: MoviesData = initialState, action: Action): MoviesData =>{
  switch (action.type){
    case moviesActionType.FETCH_SUCCESSFUL:
      return action.payload
    case moviesActionType.FETCH_FAILED:
      return action.payload
    default:
      return state
  }
}

export default reducer 