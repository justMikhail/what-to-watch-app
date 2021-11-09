import {ActionType} from '../types/actions-types';

export const selectGenre = (selectedGenre: string) => ({
  type: ActionType.SelectGenre,
  payload: selectedGenre,
} as const);
