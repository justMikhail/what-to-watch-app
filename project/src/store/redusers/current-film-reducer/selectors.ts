import {NameSpace} from '../../root-reducer';
import {State} from '../../../types/state';
import {FilmType} from '../../../types/film-type';
import {ReviewType} from '../../../types/review-type';

export const getCurrentFilmData = (state: State): null | FilmType => state[NameSpace.currentFilmData].currentFilm;
export const getSimilarFilmsData = (state: State): FilmType[] => state[NameSpace.currentFilmData].similarFilmsList;
export const getFilmReviewsData = (state: State): ReviewType[] => state[NameSpace.currentFilmData].filmReviews;
