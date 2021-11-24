import {createReducer} from '@reduxjs/toolkit';

import {FilmsData} from '../../types/state';
import {Genre} from '../../const/const';
import {filmTemplate} from '../../const/const';
import {
  loadAllFilmsData,
  loadPromoFilmData,
  selectGenre,
  setActiveFilmId
} from '../action';

const initialState: FilmsData = {
  isDataLoaded: false,
  allFilmsData: [],
  promoFilmData: filmTemplate,
  selectedGenre: Genre.DefaultGenre,
  activeFilmId: null,
};

export const filmsDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllFilmsData, (state, action) => {
      state.isDataLoaded = true;
      state.allFilmsData = action.payload;
    })
    .addCase(loadPromoFilmData, (state, action) => {
      state.promoFilmData = action.payload;
    })
    .addCase(selectGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(setActiveFilmId, (state, action) => {
      state.activeFilmId = action.payload;
    });
});

