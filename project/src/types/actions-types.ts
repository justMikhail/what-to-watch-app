import {
  requireAuthorizationStatus,
  requireLogout,
  loadFilmsData,
  selectGenre
} from '../store/action';

export enum ActionType {
  RequireAuthorizationStatus = 'user/requireAuthorizationStatus',
  RequireLogout = 'user/requireLogout',
  LoadFilmsData = 'data/loadFilmsData',
  SelectGenre = 'main/selectGenre',
}

export type Actions =
  | ReturnType<typeof requireAuthorizationStatus>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadFilmsData>
  | ReturnType<typeof selectGenre>

