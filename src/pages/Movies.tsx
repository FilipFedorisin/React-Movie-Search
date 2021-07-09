import { useSelector } from 'react-redux';
import { State } from '../state';

import Search from '../components/Search';
import Movie from '../components/Movie';

import './Movies.css';

const Movies = () => {
  const movies = useSelector((state: State) => state.MoviesData);

  return (
    <div>
      <Search />
      <div className="moviesList">
        {movies.Loading === false
          ? movies.List.map((listItem) => {
              return <Movie key={listItem.imdbID} SingleMovie={listItem} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Movies;
