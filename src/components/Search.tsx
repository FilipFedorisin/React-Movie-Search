import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useState } from 'react';
import { State } from '../state';

import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';

import { actionCreators } from '../state';

import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const { loadMovies } = bindActionCreators(actionCreators, dispatch);
  const movies = useSelector((state: State) => state.MoviesData);

  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async () => {
    loadMovies({ Loading: false, List: [] });

    let RESPONSE: any = [];

    for (let page = 1; page < 5; page++) {
      const response = await axios(
        `http://omdbapi.com/?apikey=55a4acf3&s=` + searchQuery + `&page=` + page
      );
      RESPONSE = RESPONSE.concat(response.data.Search);
    }

    loadMovies({
      Loading: false,
      List: RESPONSE
    });
  };

  const logMovies = () => {
    console.log(movies);
  };

  return (
    <div className="search">
      <TextField
        className="searchBox"
        label="Search"
        variant="filled"
        style={{ backgroundColor: '#E8E8E8' }}
        onChange={(e: any) =>
          setSearchQuery((e.target as HTMLInputElement).value)
        }
      />
      <Button
        onClick={() => fetchMovies()}
        variant="contained"
        style={{ marginLeft: 10, filter: 'dropShadow(16px 16px 10px red)' }}
      >
        <SearchIcon fontSize="large" />
      </Button>
      <Button
        onClick={() => logMovies()}
        variant="contained"
        style={{ marginLeft: 10, filter: 'dropShadow(16px 16px 10px red)' }}
      >
        Log movies
      </Button>
    </div>
  );
};

export default Search;
