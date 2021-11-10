import {FilmType} from './film-type';
import {AuthorizationStatus} from '../const/authorization-status';

export type State = {
  selectedGenre: string,
  allFilms: FilmType[],
  authorizationStatus: AuthorizationStatus,
}
