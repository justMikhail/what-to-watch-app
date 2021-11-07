import {FilmType} from './film-type';

export type State = {
  selectedGenre: string,
  filteredFilmsBySelectedGenre: FilmType[],
}
