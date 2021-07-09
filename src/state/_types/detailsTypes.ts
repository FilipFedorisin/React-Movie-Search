export enum detailsActionType {
  FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL",
  FETCH_FAILED = "FETCH_FAILED",
  LOAD_IMDBID = "LOAD_IMDBID"
}

export interface Ratings {
  Source: string
  Value: string
}

export interface Details {
  Actors: string
  Awards : string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings?: Array<Ratings>
  length: number
  Released: string
  Response: string
  Runtime: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}

export interface DetailsData {
  Title: string
  IMDBID: string
  Details: Details
}

interface FETCH_SUCCESSFUL {
  type: detailsActionType.FETCH_SUCCESSFUL
  payload: DetailsData
}

interface FETCH_FAILED {
  type: detailsActionType.FETCH_FAILED
  payload: DetailsData
}

interface LOAD_IMDBID {
  type: detailsActionType.LOAD_IMDBID
  payload: DetailsData
}

export type Action = FETCH_SUCCESSFUL | FETCH_FAILED | LOAD_IMDBID