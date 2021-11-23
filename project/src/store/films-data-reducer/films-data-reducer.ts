import {createReducer} from '@reduxjs/toolkit';

import {FilmsData} from '../../types/state';
import {loadAllFilmsData, selectGenre, setActiveFilmId} from '../action';
import {Genre} from '../../const/const';

const initialState: FilmsData = {
  isDataLoaded: false,
  allFilmsData: [],
  selectedGenre: Genre.DefaultGenre,
  activeFilmId: null,
};

export const filmsDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllFilmsData, (state, action) => {
      state.isDataLoaded = true;
      state.allFilmsData = action.payload;
    })
    .addCase(selectGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(setActiveFilmId, (state, action) => {
      state.activeFilmId = action.payload;
    });
});

