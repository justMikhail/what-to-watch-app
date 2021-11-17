import {toast} from 'react-toastify';

import {saveToken, dropToken, Token} from '../services/token';
import {adaptServerFilmsToClient} from '../services/adapter';

import {AppRoute} from '../const/routs';
import {ApiRoute} from '../const/routs';
import {AuthorizationStatus} from '../const/authorization-status';

import {ThunkActionResult} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthData} from '../types/auth-data';

import {
  requireAuthorizationStatus,
  requireLogout,
  loadFilmsData,
  redirectToRoute
} from './action';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await  api.get<FilmType[]>(ApiRoute.Films);
    const adaptedData = data.map((serverFilm) => adaptServerFilmsToClient(serverFilm));
    dispatch(loadFilmsData(adaptedData));
  };
