import {ActionType} from '../types/actions-types';
import {MOCK_FILMS} from '../mocks/mock-films';

export const selectGenre = (selectedGenre: string) => ({
  type: ActionType.SelectGenre,
  payload: selectedGenre,
} as const);

export const filterFilmsBySelectedGenre = () => ({
  type: ActionType.FilterFilmsBySelectedGenre,
  payload: MOCK_FILMS,
} as const);
