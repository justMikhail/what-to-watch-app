import {RootState} from '../store/root-reducer';
import {FilmType} from './film-type';
import {AuthorizationStatus} from '../const/authorization-status';

export type UserData = {
  authorizationStatus: AuthorizationStatus,
}

export type FilmsData = {
  isDataLoaded: boolean,
  allFilmsData: FilmType[],
  selectedGenre: string,
  activeFilmId: null | number,
}

export type State = RootState;
