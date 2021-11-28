import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {State} from './state';

import {
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  loadPromoFilmData,
  loadAllFilmsListData,
  loadCurrentFilmData,
  loadSimilarFilmsData,
  loadFilmReviews,
  selectGenre,
  setActiveFilmId,
  isReviewsPosting,
  redirectToRoute
} from '../store/action';


export enum ActionType {
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  SetUserInfo = 'user/setUserInfo',
  RequireLogout = 'user/requireLogout',
  LoadPromoFilmData = 'data/loadPromoFilmData',
  LoadAllFilmsData = 'data/loadAllFilmsData',
  LoadCurrentFilmData = 'data/loadCurrentFilmData',
  LoadSimilarFilmsData = 'data/loadSimilarFilmsData',
  LoadFilmReview = 'data/loadFilmReview',
  SelectGenre = 'data/selectGenre',
  SetActiveFilmId = 'data/setActiveFilmId',
  PostFilmReviews = 'data/postFilmReviews',
  RedirectToRoute = 'app/redirectToRoute',
  //SetFetchApiStatus
  SetPromoGetStatus = 'status/setPromoGetStatus',
  SetFilmsGetStatus = 'status/setFilmsGetStatus',
  SetFilmGetStatus = 'status/setFilmGetStatus',
  SetSimilarGetStatus = 'status/setSimilarGetStatus',
  SetCommentsGetStatus = 'status/setCommentsGetStatus',
  SetFavoritesGetStatus = 'status/setFavoritesGetStatus',
  SetPostStatus = 'status/setPostStatus',
  SetCommentPostStatus = 'status/setCommentPostStatus',
}

export type Actions =
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadPromoFilmData>
  | ReturnType<typeof loadAllFilmsListData>
  | ReturnType<typeof loadCurrentFilmData>
  | ReturnType<typeof loadSimilarFilmsData>
  | ReturnType<typeof loadFilmReviews>
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof setActiveFilmId>
  | ReturnType<typeof isReviewsPosting>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
