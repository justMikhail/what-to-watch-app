import {createReducer} from '@reduxjs/toolkit';

import {FetchStatusListTypes} from '../../../types/state';
import {FetchStatus} from '../../../const/fetch-status';

import {
  setPostStatusAction,
  setCommentPostStatusAction,
  setPromoGetStatusAction,
  setFilmsGetStatusAction,
  setFilmGetStatusAction,
  setSimilarGetStatusAction,
  setCommentsGetStatusAction,
  setFavoritesGetStatusAction
} from '../../action';

const initialState: FetchStatusListTypes = {
  postStatus: FetchStatus.Undefined,
  commentPostStatus: FetchStatus.Undefined,
  promoGetStatus: FetchStatus.Undefined,
  filmsGetStatus: FetchStatus.Undefined,
  filmGetStatus: FetchStatus.Undefined,
  similarGetStatus: FetchStatus.Undefined,
  commentsGetStatus: FetchStatus.Undefined,
  favoritesGetStatus: FetchStatus.Undefined,
};

export const fetchApiStatusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPostStatusAction, (state, action) => {
      state.postStatus = action.payload;
    })
    .addCase(setCommentPostStatusAction, (state, action) => {
      state.commentPostStatus = action.payload;
    })
    .addCase(setPromoGetStatusAction, (state, action) => {
      state.promoGetStatus = action.payload;
    })
    .addCase(setFilmsGetStatusAction, (state, action) => {
      state.filmsGetStatus = action.payload;
    })
    .addCase(setFilmGetStatusAction, (state, action) => {
      state.filmGetStatus = action.payload;
    })
    .addCase(setSimilarGetStatusAction, (state, action) => {
      state.similarGetStatus = action.payload;
    })
    .addCase(setCommentsGetStatusAction, (state, action) => {
      state.commentsGetStatus = action.payload;
    })
    .addCase(setFavoritesGetStatusAction, (state, action) => {
      state.favoritesGetStatus = action.payload;
    });
});
