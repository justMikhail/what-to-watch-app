import {createReducer} from '@reduxjs/toolkit';

import {AllFilmsData} from '../../types/state';
import {loadAllFilmsData, selectGenre, setActiveFilmId} from '../action';
import {Genre} from '../../const/const';

const initialState: AllFilmsData = {
  isDataLoaded: false,
  allFilmsData: [],
  selectedGenre: Genre.DefaultGenre,
  activeFilmId: null,
};

export const allFilmsData = createReducer(initialState, (builder) => {
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

