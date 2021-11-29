import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {State} from './state';

import {
  //user
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  //promo
  loadPromoFilmData,
  setFilmIsFavoriteAction,
  //data
  loadAllFilmsListData,
  loadCurrentFilmData,
  loadSimilarFilmsData,
  loadFilmReviews,
  selectGenre,
  setActiveFilmId,
  redirectToRoute,
  //favorites
  loadUserFavoriteFilmsListAction,
  //fetch Status
  setPromoFilmDataGetStatusAction,
  setAllFilmsListDataGetStatusAction,
  setCurrentFilmDataGetStatusAction,
  setSimilarFilmsListDataGetStatusAction,
  setCommentsGetStatusAction,
  setUserFavoriteFilmsListGetStatusAction,
  setPostStatusAction,
  setCommentPostStatusAction
} from '../store/action';

export enum ActionType {
  //app
  RedirectToRoute = 'app/redirectToRoute',
  //user
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  SetUserInfo = 'user/setUserInfo',
  RequireLogout = 'user/requireLogout',
  //promo
  LoadPromoFilmData = 'promo/loadPromoFilmData',
  //data
  LoadAllFilmsData = 'data/loadAllFilmsData',
  LoadCurrentFilmData = 'data/loadCurrentFilmData',
  LoadSimilarFilmsData = 'data/loadSimilarFilmsData',
  LoadFilmReview = 'data/loadFilmReview',
  SelectGenre = 'data/selectGenre',
  SetActiveFilmId = 'data/setActiveFilmId',
  //favorites
  LoadUserFavoriteFilmsList = 'favorite/loadUserFavoriteFilms',
  SetFilmIsFavorite = 'promo/setFilmIsFavorite',
  //fetch status
  SetPromoFilmGetStatus = 'fetchStatus/setPromoFilmGetStatus',
  SetAllFilmsListGetStatus = 'fetchStatus/setAllFilmsListGetStatus',
  SetCurrentFilmGetStatus = 'fetchStatus/setCurrentFilmGetStatus',
  SetSimilarFilmsListGetStatus = 'fetchStatus/setSimilarFilmsListGetStatus',
  SetCommentsGetStatus = 'fetchStatus/setCommentsGetStatus',
  SetFavoriteFilmsListGetStatus = 'fetchStatus/setFavoriteFilmsListGetStatus',
  SetPostStatus = 'fetchStatus/setPostStatus',
  SetCommentPostStatus = 'fetchStatus/setCommentPostStatus',
}

export type Actions =
  //app
  | ReturnType<typeof redirectToRoute>
  //user
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof requireLogout>
  //promo
  | ReturnType<typeof loadPromoFilmData>
  //data
  | ReturnType<typeof loadAllFilmsListData>
  | ReturnType<typeof loadCurrentFilmData>
  | ReturnType<typeof loadSimilarFilmsData>
  | ReturnType<typeof loadFilmReviews>
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof setActiveFilmId>
  //favorites
  | ReturnType<typeof loadUserFavoriteFilmsListAction>
  | ReturnType<typeof setFilmIsFavoriteAction>
  //fetch status
  | ReturnType<typeof setPromoFilmDataGetStatusAction>
  | ReturnType<typeof setAllFilmsListDataGetStatusAction>
  | ReturnType<typeof setCurrentFilmDataGetStatusAction>
  | ReturnType<typeof setSimilarFilmsListDataGetStatusAction>
  | ReturnType<typeof setCommentsGetStatusAction>
  | ReturnType<typeof setUserFavoriteFilmsListGetStatusAction>
  | ReturnType<typeof setPostStatusAction>
  | ReturnType<typeof setCommentPostStatusAction>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
