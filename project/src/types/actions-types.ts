import {
  selectGenre
} from '../store/action';

export enum ActionType {
  SelectGenre = 'main/selectGenre',
}

export type Actions =
  | ReturnType<typeof selectGenre>

