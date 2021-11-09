import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './store/reducer';

import App from './components/app/app';

import {MOCK_FILMS} from './mocks/mock-films';

const PromoFilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        title = {PromoFilmData.TITLE}
        genre = {PromoFilmData.GENRE}
        year = {PromoFilmData.YEAR}
        films = {MOCK_FILMS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

