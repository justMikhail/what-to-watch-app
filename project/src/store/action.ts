import {createAction} from '@reduxjs/toolkit';

import {ActionType} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthorizationStatus} from '../const/authorization-status';
import {AppRoute} from '../const/routs';
import {UserInfoType} from '../types/user-info-type';
import {ReviewType} from '../types/review-type';
import {FetchStatus} from '../const/fetch-status';

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

export const loadUserFavoriteFilmsListAction = createAction(
  ActionType.LoadUserFavoriteFilmsList,
  (filmsData: FilmType[]) => ({
    payload: filmsData,
  }),
);

export const loadPromoFilmData = createAction(
  ActionType.LoadPromoFilmData,
  (promoFilmData: FilmType) => ({
    payload: promoFilmData,
  }),
);

export const loadAllFilmsListData = createAction(
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

export const loadFilmReviews = createAction(
  ActionType.LoadFilmReview,
  (filmReviews: ReviewType[]) => ({
    payload: filmReviews,
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

//Fetch Api Status
export const setPostStatusAction = createAction(
  ActionType.SetPostStatus,
  (postStatus: FetchStatus) => ({
    payload: postStatus,
  }),
);

export const setCommentPostStatusAction = createAction(
  ActionType.SetCommentPostStatus,
  (postStatus: FetchStatus) => ({
    payload: postStatus,
  }),
);

export const setPromoGetStatusAction = createAction(
  ActionType.SetPromoGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFilmsGetStatusAction = createAction(
  ActionType.SetFilmsGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFilmGetStatusAction = createAction(
  ActionType.SetFilmGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setSimilarGetStatusAction = createAction(
  ActionType.SetSimilarGetStatus,
  (getStatus: FetchStatus) => ({
    payload: getStatus,
  }),
);

export const setCommentsGetStatusAction = createAction(
  ActionType.SetCommentsGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFavoritesGetStatusAction = createAction(
  ActionType.SetFavoritesGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setPromoIsFavoriteAction = createAction(
  ActionType.SetPromoIsFavorite,
  (status: boolean) => ({
    payload: status,
  }),
);
