import {AuthorizationStatus} from '../const/authorization-status';
import {FilmType} from './film-type';

export type State = {
  authorizationStatus: AuthorizationStatus,
  allFilmsData: FilmType[],
  selectedGenre: string,
  activeFilmId: null | number,
  isDataLoaded: boolean,
}
