import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionCreators, State } from '../state';

import './Movie.css';

const Movie = (props: any) => {
  //store setup
  const dispatch = useDispatch();
  const { loadDetails } = bindActionCreators(actionCreators, dispatch);
  const details = useSelector((state: State) => state.DetailsData);

  //router setup
  const history = useHistory();

  const handleClick = (Title: string, imdbID: string) => {
    loadDetails({
      Title: Title,
      IMDBID: imdbID,
      Details: details.Details
    });
    history.push(`/details/${imdbID}`);
  };

  const addToFavorite = (imdbID: string) => {
    let favorites: any = JSON.parse(
      localStorage.getItem('favoriteMovies') || JSON.stringify([{}, {}])
    );

    if (favorites === [{}, {}]) {
      localStorage.setItem(
        'favoriteMovies',
        JSON.stringify([props.SingleMovie, {}])
      );
    } else {
      let dupe = 0;

      favorites.forEach((item: any) => {
        if (item.imdbID === props.SingleMovie.imdbID) {
          dupe = 1;
        }
      });

      if (dupe === 0) {
        favorites = favorites.concat(props.SingleMovie);
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
      } else {
        alert('movie already in the list');
      }
    }
  };

  return (
    <div className="media">
      <img
        className="poster"
        src={props.SingleMovie.Poster}
        alt={props.SingleMovie.Title}
        onClick={() =>
          handleClick(props.SingleMovie.Title, props.SingleMovie.imdbID)
        }
      />
      <b className="title">{props.SingleMovie.Title}</b>
      <span className="subTitle">
        {props.SingleMovie.Type}
        <span className="subTitle">{props.SingleMovie.Year}</span>
        <button onClick={() => addToFavorite(props.SingleMovie.imdbID)}>
          ♥
        </button>
      </span>
    </div>
  );
};

export default Movie;
