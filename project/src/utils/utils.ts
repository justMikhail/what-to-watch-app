import {FilmType} from '../types/film-type';
import {Genres} from '../const/const';

export const filterFilmsBySelectedGenre = (allFilms: FilmType[], selectedGenre: string): FilmType[] => {
  if (selectedGenre === Genres.All) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre === selectedGenre);
};
