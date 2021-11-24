import {createReducer} from '@reduxjs/toolkit';
import {CurrentFilmData} from '../../types/state';
import {
  loadCurrentFilmData,
  loadSimilarFilmsData,
  loadFilmReviews
} from '../action';

const initialState: CurrentFilmData = {
  currentFilm: null,
  similarFilms: [],
  filmReviews: [],
  isCurrentFilmLoaded: false,
  isCommentPosting: false,
};

export const currentFilmDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentFilmData, (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    })
    .addCase(loadSimilarFilmsData, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    });
});
