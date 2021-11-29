import {FilmType} from '../types/film-type';
import {Genre} from '../const/const';
import {AuthorizationStatus} from '../const/authorization-status';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getGenresFromFilmList = (allFilms: FilmType[]): string[] => {
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

export const formatRating = (rating: number): string =>
  rating.toFixed(1).replace('.', ',');

export const getFilmRatingDescription = (rating: number): string => {
  if (rating >= 0 && rating < 3) {
    return 'Bad';
  }

  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if (rating >= 5 && rating < 8) {
    return 'Good';
  }

  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }

  if (rating === 10) {
    return 'Awesome';
  }

  return '';
};
