import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {FilmType} from '../../types/film-type';

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.allFilmsData].isDataLoaded;
export const getAllFilmsData = (state: State): FilmType[] => state[NameSpace.allFilmsData].allFilmsData;
export const getSelectedGenre = (state: State): string => state[NameSpace.allFilmsData].selectedGenre;
export const getActiveFilmId = (state: State): number | null => state[NameSpace.allFilmsData].activeFilmId;
