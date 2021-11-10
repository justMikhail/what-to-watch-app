import {FilmType} from './film-type';
import {AuthorizationStatus} from '../const/authorization-status';

export type State = {
  authorizationStatus: AuthorizationStatus,
  allFilmsData: FilmType[],
  selectedGenre: string,
}
