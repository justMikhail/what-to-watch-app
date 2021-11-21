import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {FilmType} from '../../types/film-type';

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.dataAllFilms].isDataLoaded;
export const getAllFilmsData = (state: State): FilmType[] => state[NameSpace.dataAllFilms].allFilmsData;
export const getSelectedGenre = (state: State): string => state[NameSpace.dataAllFilms].selectedGenre;
export const getActiveFilmId = (state: State): number | null => state[NameSpace.dataAllFilms].activeFilmId;
