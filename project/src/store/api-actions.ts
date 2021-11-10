import {saveToken, dropToken, Token} from '../services/token';

import {ApiRoute} from '../const/route';
import {AuthorizationStatus} from '../const/authorization-status';

import {ThunkActionResult} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthData} from '../types/auth-data';

import {
  loadFilmsData,
  requireAuthorizationStatus,
  requireLogout
} from './action';

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
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
    dispatch(loadFilmsData(data));
  };
