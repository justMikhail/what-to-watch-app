import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

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
    <Provider store={store}>
      <App
        title={PromoFilmData.TITLE}
        genre={PromoFilmData.GENRE}
        year={PromoFilmData.YEAR}
        films = {MOCK_FILMS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

