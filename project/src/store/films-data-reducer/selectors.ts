import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {FilmType} from '../../types/film-type';

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.filmsData].isDataLoaded;
export const getAllFilmsData = (state: State): FilmType[] => state[NameSpace.filmsData].allFilmsData;
export const getPromoFilmsData = (state: State): FilmType => state[NameSpace.filmsData].promoFilmData;
export const getSelectedGenre = (state: State): string => state[NameSpace.filmsData].selectedGenre;
export const getActiveFilmId = (state: State): number | null => state[NameSpace.filmsData].activeFilmId;
