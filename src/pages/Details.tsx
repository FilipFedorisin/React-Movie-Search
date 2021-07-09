import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import axios from 'axios';

import { actionCreators, State } from '../state';
import { useEffect } from 'react';

const Details = () => {
  const dispatch = useDispatch();
  const { loadDetails } = bindActionCreators(actionCreators, dispatch);
  const DetailsData = useSelector((state: State) => state.DetailsData);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=55a4acf3&i=` + DetailsData.IMDBID)
      .then((res) => {
        if (res.status === 200) {
          loadDetails({
            Title: DetailsData.Title,
            IMDBID: DetailsData.IMDBID,
            Details: res.data
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h1>{DetailsData.Title}</h1>
      <img
        className="poster"
        src={DetailsData.Details.Poster}
        alt={DetailsData.Title}
      />
      <h2>{DetailsData.Details.Genre}</h2>
      <p>{DetailsData.Details.Plot}</p>
      <p>{DetailsData.Details.Actors}</p>
      <p>{DetailsData.Details.DVD}</p>
      <p>{DetailsData.Details.Writer}</p>
      <p>{DetailsData.Details.Production}</p>
    </div>
  );
};

export default Details;
