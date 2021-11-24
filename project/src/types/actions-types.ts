import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {State} from './state';

import {
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  loadPromoFilmData,
  loadAllFilmsData,
  loadCurrentFilmData,
  loadSimilarFilmsData,
  loadFilmReviews,
  selectGenre,
  setActiveFilmId,
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
  RedirectToRoute = 'app/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadPromoFilmData>
  | ReturnType<typeof loadAllFilmsData>
  | ReturnType<typeof loadCurrentFilmData>
  | ReturnType<typeof loadSimilarFilmsData>
  | ReturnType<typeof loadFilmReviews>
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof setActiveFilmId>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
