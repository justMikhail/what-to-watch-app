import {createReducer} from '@reduxjs/toolkit';
import {loadCurrentFilmData} from '../action';
import {CurrentFilmData} from '../../types/state';

const initialState: CurrentFilmData = {
  currentFilm: null,
  similarFilms: [],
  filmComments: null,
  isCurrentFilmLoaded: false,
  isCommentPosting: false,
};

export const currentFilmDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentFilmData, (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    });
});
