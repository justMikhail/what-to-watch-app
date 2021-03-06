import {createReducer} from '@reduxjs/toolkit';

import {FetchStatusListTypes} from '../../../types/state';
import {FetchStatus} from '../../../const/fetch-status';

import {
  setPostStatusAction,
  setCommentPostStatusAction,
  setPromoFilmDataGetStatusAction,
  setAllFilmsListDataGetStatusAction,
  setCurrentFilmDataGetStatusAction,
  setSimilarFilmsListDataGetStatusAction,
  setCommentsGetStatusAction,
  setUserFavoriteFilmsListGetStatusAction
} from '../../action';

const initialState: FetchStatusListTypes = {
  postStatus: FetchStatus.Success,
  commentPostStatus: FetchStatus.Unknown,
  promoGetStatus: FetchStatus.Success,
  filmsGetStatus: FetchStatus.Success,
  filmGetStatus: FetchStatus.Success,
  similarGetStatus: FetchStatus.Success,
  commentsGetStatus: FetchStatus.Success,
  favoritesGetStatus: FetchStatus.Success,
};

export const fetchApiStatusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPostStatusAction, (state, action) => {
      state.postStatus = action.payload;
    })
    .addCase(setCommentPostStatusAction, (state, action) => {
      state.commentPostStatus = action.payload;
    })
    .addCase(setPromoFilmDataGetStatusAction, (state, action) => {
      state.promoGetStatus = action.payload;
    })
    .addCase(setAllFilmsListDataGetStatusAction, (state, action) => {
      state.filmsGetStatus = action.payload;
    })
    .addCase(setCurrentFilmDataGetStatusAction, (state, action) => {
      state.filmGetStatus = action.payload;
    })
    .addCase(setSimilarFilmsListDataGetStatusAction, (state, action) => {
      state.similarGetStatus = action.payload;
    })
    .addCase(setCommentsGetStatusAction, (state, action) => {
      state.commentsGetStatus = action.payload;
    })
    .addCase(setUserFavoriteFilmsListGetStatusAction, (state, action) => {
      state.favoritesGetStatus = action.payload;
    });
});
