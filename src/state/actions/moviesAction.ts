import { moviesActionType, Action, MoviesData} from "../_types/moviesTypes"
import { Dispatch } from "redux"

export const loadMovies = (MoviesData: MoviesData) =>{
  return(dispatch:Dispatch<Action>) =>{
    dispatch({
      type: moviesActionType.FETCH_SUCCESSFUL,
      payload: MoviesData
    })
  }
}

export const loadMoviesFail = (MoviesData: MoviesData) =>{
  return(dispatch:Dispatch<Action>) =>{
    dispatch({
      type: moviesActionType.FETCH_FAILED,
      payload: MoviesData
    })
  }
}
