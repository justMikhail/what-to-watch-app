import {FilmType} from '../types/film-type';
import {Genre} from '../const/const';
import {AuthorizationStatus} from '../const/authorization-status';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getGenresFromFilmList = (allFilms: FilmType[]) => {
  const maxGenresCount = 10;
  const allGenres = [Genre.DefaultGenre, ...new Set(allFilms.map((film) => film.genre))];

  return allGenres.slice(0, maxGenresCount);
};

export const filterFilmsBySelectedGenre = (allFilms: FilmType[], selectedGenre: string): FilmType[] => {
  if (selectedGenre === Genre.DefaultGenre) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre === selectedGenre);
};
