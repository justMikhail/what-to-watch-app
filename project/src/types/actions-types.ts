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
  setPromoIsFavoriteAction,
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
  setPromoGetStatusAction,
  setFilmsGetStatusAction,
  setFilmGetStatusAction,
  setSimilarGetStatusAction,
  setCommentsGetStatusAction,
  setFavoritesGetStatusAction,
  setPostStatusAction,
  setCommentPostStatusAction
} from '../store/action';


export enum ActionType {
  //user
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  SetUserInfo = 'user/setUserInfo',
  RequireLogout = 'user/requireLogout',
  //promo
  LoadPromoFilmData = 'promo/loadPromoFilmData',
  SetPromoIsFavorite = 'promo/setPromoIsFavorite',
  //data
  LoadAllFilmsData = 'data/loadAllFilmsData',
  LoadCurrentFilmData = 'data/loadCurrentFilmData',
  LoadSimilarFilmsData = 'data/loadSimilarFilmsData',
  LoadFilmReview = 'data/loadFilmReview',
  SelectGenre = 'data/selectGenre',
  SetActiveFilmId = 'data/setActiveFilmId',
  PostFilmReviews = 'data/postFilmReviews',
  RedirectToRoute = 'app/redirectToRoute',
  //favorites
  LoadUserFavoriteFilmsListAction = 'favorite/loadUserFavoriteFilms',
  //fetch status
  SetPromoGetStatus = 'fetchStatus/setPromoGetStatus',
  SetFilmsGetStatus = 'fetchStatus/setFilmsGetStatus',
  SetFilmGetStatus = 'fetchStatus/setFilmGetStatus',
  SetSimilarGetStatus = 'fetchStatus/setSimilarGetStatus',
  SetCommentsGetStatus = 'fetchStatus/setCommentsGetStatus',
  SetFavoritesGetStatus = 'fetchStatus/setFavoritesGetStatus',
  SetPostStatus = 'fetchStatus/setPostStatus',
  SetCommentPostStatus = 'fetchStatus/setCommentPostStatus',
}

export type Actions =
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
  | ReturnType<typeof redirectToRoute>
  //favorites
  | ReturnType<typeof loadUserFavoriteFilmsListAction>
  | ReturnType<typeof setPromoIsFavoriteAction>
  //fetch status
  | ReturnType<typeof setPromoGetStatusAction>
  | ReturnType<typeof setFilmsGetStatusAction>
  | ReturnType<typeof setFilmGetStatusAction>
  | ReturnType<typeof setSimilarGetStatusAction>
  | ReturnType<typeof setCommentsGetStatusAction>
  | ReturnType<typeof setFavoritesGetStatusAction>
  | ReturnType<typeof setPostStatusAction>
  | ReturnType<typeof setCommentPostStatusAction>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
