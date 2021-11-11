import {FilmType} from '../types/film-type';
import {Genre} from '../const/const';
import {AuthorizationStatus} from '../const/authorization-status';

export const filterFilmsBySelectedGenre = (allFilms: FilmType[], selectedGenre: string): FilmType[] => {
  if (selectedGenre === Genre.DefaultGenre) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre === selectedGenre);
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
