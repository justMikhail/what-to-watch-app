import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

//Mock Data
import {MOCK_FILMS} from './mocks/mock-films';

const PromoFilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={PromoFilmData.TITLE}
      genre={PromoFilmData.GENRE}
      year={PromoFilmData.YEAR}
      films = {MOCK_FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

