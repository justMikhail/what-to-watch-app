import {toast} from 'react-toastify';
import {generatePath} from 'react-router-dom';

import {saveToken, dropToken, Token} from '../services/token';
import {
  adaptServerFilmsToClient,
  adaptServerUserInfoToClient,
  adaptServerFilmToClient
} from '../services/adapter';

import {AppRoute} from '../const/routs';
import {ApiRoute} from '../const/routs';
import {AuthorizationStatus} from '../const/authorization-status';

import {ThunkActionResult} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthData} from '../types/auth-data';

import {
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  loadAllFilmsData,
  loadCurrentFilmData,
  loadSimilarFilmsData,
  redirectToRoute
} from './action';

const AUTH_FAIL_MESSAGE = 'Don\'t forget to sign in.';
const SIGN_IN_FAIL_MESSAGE = 'Sign In Error. Please try again.';
const SOMETHING_ERROR_MESSAGE = 'Something went wrong try again later';

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const logInAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptServerUserInfoToClient(data)));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      toast.info(SIGN_IN_FAIL_MESSAGE);
    }
  };


export const logOutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
    dispatch(requireLogout());
  };

export const fetchAllFilmsDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await  api.get<FilmType[]>(ApiRoute.Films);
    const adaptedData = data.map((serverFilm) => adaptServerFilmsToClient(serverFilm));
    dispatch(loadAllFilmsData(adaptedData));
  };

export const fetchSimilarFilmsDataAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const similarFilmsPath = generatePath(ApiRoute.SimilarFilms, {id});
      const {data} = await api.get<FilmType[]>(similarFilmsPath);
      const adaptedData = data.map((serverFilm) =>
        adaptServerFilmsToClient(serverFilm)).filter((film) => film.id !== id);
      dispatch(loadSimilarFilmsData(adaptedData));
    } catch (error) {
      toast.info(SOMETHING_ERROR_MESSAGE);
    }
  };

export const fetchCurrentFilmDataAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(AppRoute.Film, {id});
      const {data: serverCurrentFilm} = await api.get(filmPath);
      const currentFilmData = adaptServerFilmToClient(serverCurrentFilm);
      dispatch(loadCurrentFilmData(currentFilmData));
    } catch (error) {
      toast.info(SOMETHING_ERROR_MESSAGE);
    }
  };
