import Movie from '../components/Movie';

import './Movies.css';

const Favorites = () => {
  const favorites: any = JSON.parse(
    localStorage.getItem('favoriteMovies') || ''
  );
  return (
    <div className="moviesList">
      {favorites !== 0
        ? favorites.map((listItem: any) => {
            return <Movie key={listItem.imdbID} SingleMovie={listItem} />;
          })
        : null}
    </div>
  );
};

export default Favorites;
