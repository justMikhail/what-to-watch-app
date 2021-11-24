import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {FilmType} from '../../types/film-type';

export const getCurrentFilmData = (state: State): null | FilmType => state[NameSpace.currentFilmData].currentFilm;
