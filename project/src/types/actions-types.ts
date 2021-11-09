import {
  selectGenre,
  filterFilmsBySelectedGenre
} from '../store/action';

export enum ActionType {
  SelectGenre = 'main/selectGenre',
  FilterFilmsBySelectedGenre = 'main/filterFilmsBySelectedGenre',
}

export type Actions =
  | ReturnType<typeof selectGenre>
  | ReturnType<typeof filterFilmsBySelectedGenre>

