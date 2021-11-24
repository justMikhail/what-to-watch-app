import {createAction} from '@reduxjs/toolkit';

import {ActionType} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthorizationStatus} from '../const/authorization-status';
import {AppRoute} from '../const/routs';
import {UserInfoType} from '../types/user-info-type';

export const requireAuthorizationStatus = createAction(
  ActionType.RequireAuthorizationStatus,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const setUserInfo = createAction(
  ActionType.SetUserInfo,
  (userInfo: UserInfoType) => ({
    payload: userInfo,
  }),
);

export const loadPromoFilmData = createAction(
  ActionType.LoadPromoFilmData,
  (promoFilmData: FilmType) => ({
    payload: promoFilmData,
  }),
);

export const loadAllFilmsData = createAction(
  ActionType.LoadAllFilmsData,
  (allFilmsData: FilmType[]) => ({
    payload: allFilmsData,
  }),
);

export const loadSimilarFilmsData = createAction(
  ActionType.LoadSimilarFilmsData,
  (similarFilmsData: FilmType[]) => ({
    payload: similarFilmsData,
  }),
);

export const loadCurrentFilmData = createAction(
  ActionType.LoadCurrentFilmData,
  (currentFilmData: FilmType) => ({
    payload: currentFilmData,
  }),
);

export const selectGenre = createAction(
  ActionType.SelectGenre,
  (selectedGenre: string) => ({
    payload: selectedGenre,
  }),
);

export const setActiveFilmId = createAction(
  ActionType.SetActiveFilmId,
  (activeFilmId: number | null) => ({
    payload: activeFilmId,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);
