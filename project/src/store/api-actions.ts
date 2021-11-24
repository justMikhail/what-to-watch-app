import {toast} from 'react-toastify';

import {saveToken, dropToken, Token} from '../services/token';
import {adaptServerFilmsToClient, adaptServerUserInfoToClient} from '../services/adapter';

import {AppRoute} from '../const/routs';
import {ApiRoute} from '../const/routs';
import {AuthorizationStatus} from '../const/authorization-status';

import {ThunkActionResult} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthData} from '../types/auth-data';

import {
  requireAuthorizationStatus,
  requireLogout,
  loadAllFilmsData,
  redirectToRoute, setUserInfo
} from './action';

const AUTH_FAIL_MESSAGE = 'Don\'t forget to sign in.';
const SIGN_IN_FAIL_MESSAGE = 'Sign In Error. Please try again.';

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const logInAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
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
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
    dispatch(requireLogout());
  };

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await  api.get<FilmType[]>(ApiRoute.Films);
    const adaptedData = data.map((serverFilm) => adaptServerFilmsToClient(serverFilm));
    dispatch(loadAllFilmsData(adaptedData));
  };
