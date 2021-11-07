import {FilmType} from './film-type';

export enum ActionType {
  SelectGenre = 'main/selectGenre',
  FilterFilmsBySelectedGenre = 'main/filterFilmsBySelectedGenre',
}

export type SelectGenreAction = {
  type: ActionType.SelectGenre;
  payload: string;
}

export type FilterFilmsBySelectedGenreActions = {
  type: ActionType.FilterFilmsBySelectedGenre;
  payload: FilmType[];
}

export type Actions =
  | SelectGenreAction
  | FilterFilmsBySelectedGenreActions;
