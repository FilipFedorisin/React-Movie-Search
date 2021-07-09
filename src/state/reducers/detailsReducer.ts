import {Action, DetailsData, detailsActionType} from "../_types/detailsTypes"

const initialState: DetailsData = {
  Title: "",
  IMDBID: "",
  Details: {
    Actors: "",
    Awards : "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Production: "",
    Rated: "",
    Ratings: [],
    length: 0,
    Released: "",
    Response: "",
    Runtime: "",
    Website: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: ""
  }
}

const reducer = (state: DetailsData = initialState, action: Action): DetailsData =>{
  switch(action.type){
    case detailsActionType.FETCH_SUCCESSFUL:
      return action.payload
    default:
      return state
  }
}

export default reducer