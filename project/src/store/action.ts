import {ActionType} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthorizationStatus} from '../const/authorization-status';

export const requireAuthorizationStatus = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorizationStatus,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadFilmsData = (films: FilmType[] | null) => ({
  type: ActionType.LoadFilmsData,
  payload: {films},
} as const);

export const selectGenre = (selectedGenre: string) => ({
  type: ActionType.SelectGenre,
  payload: selectedGenre,
} as const);
