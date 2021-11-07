import {ActionType, SelectGenreAction, FilterFilmsBySelectedGenreActions} from '../types/actions-types';
import {MOCK_FILMS} from '../mocks/mock-films';

export const selectGenre = (selectedGenre: string): SelectGenreAction => ({
  type: ActionType.SelectGenre,
  payload: selectedGenre,
});

export const filterFilmsBySelectedGenre = (): FilterFilmsBySelectedGenreActions => ({
  type: ActionType.FilterFilmsBySelectedGenre,
  payload: MOCK_FILMS,
});
