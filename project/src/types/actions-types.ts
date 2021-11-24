import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {State} from './state';

import {
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  loadAllFilmsData,
  loadCurrentFilmData,
  selectGenre,
  setActiveFilmId,
  redirectToRoute
} from '../store/action';


export enum ActionType {
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  SetUserInfo = 'user/setUserInfo',
  RequireLogout = 'user/requireLogout',
  LoadAllFilmsData = 'data/loadAllFilmsData',
  LoadCurrentFilmData = 'data/loadCurrentFilmData',
  SelectGenre = 'main/selectGenre',
  SetActiveFilmId = 'data/setActiveFilmId',
  RedirectToRoute = 'app/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadAllFilmsData>
  | ReturnType<typeof loadCurrentFilmData>
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof setActiveFilmId>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
