import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {State} from './state';

import {
  requireAuthorizationStatus,
  requireLogout,
  loadFilmsData,
  selectGenre,
  redirectToRoute
} from '../store/action';


export enum ActionType {
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  RequireLogout = 'user/requireLogout',
  LoadFilmsData = 'data/loadFilmsData',
  SelectGenre = 'main/selectGenre',
  RedirectToRoute = 'app/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadFilmsData>
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
