import {ActionType} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthorizationStatus} from '../const/authorization-status';
import {AppRoute} from '../const/routs';

export const requireAuthorizationStatus = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorizationStatus,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadFilmsData = (filmsData: FilmType[]) => ({
  type: ActionType.LoadFilmsData,
  payload: filmsData,
} as const);

export const selectGenre = (selectedGenre: string) => ({
  type: ActionType.SelectGenre,
  payload: selectedGenre,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
