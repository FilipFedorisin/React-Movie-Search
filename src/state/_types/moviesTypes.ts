// Pomôcka na preklepy
export enum moviesActionType {
  FETCH_SUCCESSFUL = "FETCH_SUCCESFUL", 
  FETCH_FAILED = "FETCH_FAILED"
}

export interface SingleMovie {
    Title: string
    Year: number
    imdbID: string
    Type: string
    Poster: string
}

export interface MoviesData {
  Loading: boolean
  List: Array<SingleMovie>
}

// Kontrola zápisov Akcií 
interface FETCH_SUCCESSFUL {
  type: moviesActionType.FETCH_SUCCESSFUL
  payload: MoviesData
}

interface FETCH_FAILED {
  type: moviesActionType.FETCH_FAILED
  payload: MoviesData
}

export type Action = FETCH_SUCCESSFUL | FETCH_FAILED


/*
Actors: "Dharmendra, Vinod Khanna, Dimple Kapadia, Poonam Dhillon"
Awards: "1 nomination."
BoxOffice: "N/A"
Country: "India"
DVD: "N/A"
Director: "J.P. Dutta"
Genre: "Action, Drama"
Language: "Hindi"
Metascore: "N/A"
Plot: "In India circa after the British Rule, there is a princely family consisting of Bade Thakur (Shammi Kapoor), his sons Devan (Vijayendra Ghatge), Vikram Singh (Vinod Khanna), and a third son..."
Poster: "https://m.media-amazon.com/images/M/MV5BZWMyNDlhYzItODRmZS00MDYzLWI2YTMtNzM3NzVjMGJlMTg5XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
Production: "N/A"
Rated: "N/A"
Ratings: Array(1)
0: {Source: "Internet Movie Database", Value: "6.3/10"}
length: 1
__proto__: Array(0)
Released: "14 Jul 1989"
Response: "True"
Runtime: "201 min"
Title: "Batwara"
Type: "movie"
Website: "N/A"
Writer: "J.P. Dutta"
Year: "1989"
imdbID: "tt0096896"
imdbRating: "6.3"
imdbVotes: "207"
*/