import {createReducer} from '@reduxjs/toolkit';
import {CurrentFilmData} from '../../../types/state';
import {
  loadCurrentFilmData,
  loadSimilarFilmsData,
  loadFilmReviews,
  isReviewsPosting
} from '../../action';

const initialState: CurrentFilmData = {
  currentFilm: null,
  similarFilmsList: [],
  filmReviews: [],
  isCurrentFilmLoaded: false,
  isCommentPosted: false,
};

export const currentFilmDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentFilmData, (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    })
    .addCase(loadSimilarFilmsData, (state, action) => {
      state.similarFilmsList = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(isReviewsPosting, (state, action) => {
      state.isCommentPosted = action.payload;
    });
});
