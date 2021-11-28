import {toast} from 'react-toastify';
import {generatePath} from 'react-router-dom';

import {
  adaptServerFilmsToClient,
  adaptServerUserInfoToClient,
  adaptServerFilmToClient
} from '../services/adapter';

import {AppRoute} from '../const/routs';
import {ApiRoute} from '../const/routs';
import {AuthorizationStatus} from '../const/authorization-status';

import {ThunkActionResult} from '../types/actions-types';
import {FilmType} from '../types/film-type';
import {AuthData} from '../types/auth-data';
import {ReviewFormType, ReviewType} from '../types/review-type';

import {saveToken, dropToken, getToken, Token} from '../services/token';

import {
  requireAuthorizationStatus,
  setUserInfo,
  requireLogout,
  loadPromoFilmData,
  loadAllFilmsListData,
  loadCurrentFilmData,
  loadSimilarFilmsData,
  redirectToRoute,
  loadFilmReviews,
  isReviewsPosting,
  //favorites
  loadFavoriteFilmsListAction,
  setPromoIsFavoriteAction,
  //fetch Status
  setPromoGetStatusAction,
  setFilmGetStatusAction,
  setFavoritesGetStatusAction,
  setCommentsGetStatusAction,
  setSimilarGetStatusAction,
  setCommentPostStatusAction,
  setPostStatusAction,
} from './action';
import {FetchStatus} from '../const/fetch-status';

const TOAST_CLOSE_TIMEOUT = 2500;

export enum ToastMessage {
  SOMETHING_ERROR = 'Something went wrong try again later',
  REMINDER_TO_SIGN_IN = 'Don\'t forget to sign in.',
  POST_SUCCESS = 'Congrats! Your review has been posted! You will be redirected to the film page shortly.',
  POST_FAIL = 'Something went wrong. Comment hasn\'t been posted.',
  POST_PROCESSING = 'Just a sec. Your review is posting now.',
  SIGN_IN_FAIL = 'Sign In Error. Please try again.',
}

export const checkAuthStatusAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(ApiRoute.Login)
      .then(() => {
        const token = getToken();
        if (token) {
          dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
        } else {
          dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
        }
      })
      .catch(() => {
        dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
        toast.info(ToastMessage.REMINDER_TO_SIGN_IN);
      });
  };

export const logInAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptServerUserInfoToClient(data)));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      toast.info(ToastMessage.SIGN_IN_FAIL);
    }
  };


export const logOutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
    dispatch(requireLogout());
  };

export const fetchPromoFilmDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPromoGetStatusAction(FetchStatus.InProgress));
    await  api.get(ApiRoute.Promo)
      .then(({data}) => {
        const adaptedData = adaptServerFilmToClient(data);
        dispatch(loadPromoFilmData(adaptedData));
      })
      .catch(() => {
        toast.info(ToastMessage.SOMETHING_ERROR);
      });
  };

export const fetchAllFilmsDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await  api.get<FilmType[]>(ApiRoute.Films);
    const adaptedData = data.map((serverFilm) => adaptServerFilmsToClient(serverFilm));
    dispatch(loadAllFilmsListData(adaptedData));
  };

export const fetchSimilarFilmsDataAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const similarFilmsPath = generatePath(ApiRoute.SimilarFilms, {id});
    await api.get<FilmType[]>(similarFilmsPath)
      .then(({data}) => {
        const adaptedData = data.map((serverFilm) => adaptServerFilmsToClient(serverFilm)).filter((film) => film.id !== id);
        dispatch(loadSimilarFilmsData(adaptedData));
        dispatch(setSimilarGetStatusAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setSimilarGetStatusAction(FetchStatus.Error));
        toast.info(ToastMessage.SOMETHING_ERROR);
      });
  };

export const fetchCurrentFilmDataAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(AppRoute.Film, {id});
      const {data: serverCurrentFilm} = await api.get(filmPath);
      const currentFilmData = adaptServerFilmToClient(serverCurrentFilm);
      dispatch(loadCurrentFilmData(currentFilmData));
    } catch (error) {
      toast.info(ToastMessage.SOMETHING_ERROR);
    }
  };

export const fetchFilmReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(ApiRoute.FilmComments, {id});
      const {data} = await api.get<ReviewType[]>(filmPath);
      dispatch(loadFilmReviews(data));
    } catch (error) {
      toast.info(ToastMessage.SOMETHING_ERROR);
    }
  };

export const postFilmComment = (id: number, payload: ReviewFormType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const postCommentPath = generatePath(ApiRoute.FilmComments, {id});
    const filmPath = generatePath(AppRoute.Film, {id});

    dispatch(isReviewsPosting(true));
    toast.info(ToastMessage.POST_PROCESSING);

    try {
      await api.post<{token: Token}>(postCommentPath, payload);

      toast.dismiss();
      toast.success(ToastMessage.POST_SUCCESS, {autoClose: TOAST_CLOSE_TIMEOUT});

      setTimeout(() => {
        dispatch(redirectToRoute(filmPath));
      }, TOAST_CLOSE_TIMEOUT);
      dispatch(isReviewsPosting(false));

    } catch (error) {
      toast.dismiss();
      toast.error(ToastMessage.POST_FAIL);
      dispatch(isReviewsPosting(false));
    }
  };

export const fetchFavoritesFilmsListAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(setFavoritesGetStatusAction(FetchStatus.InProgress));
    await api.get(ApiRoute.Favorite)
      .then(({data}) => {
        dispatch(loadFavoriteFilmsListAction(adaptServerFilmToClient(data)));
        dispatch(setFavoritesGetStatusAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoritesGetStatusAction(FetchStatus.Error));
      });
  }
);

export const postPromoIsFavoriteAction = (id: string, status: number): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPostStatusAction(FetchStatus.InProgress));
    const postPath = generatePath(`${ ApiRoute.Favorite }/${ id }/${ status }`, {id: id, status});
    await api.post(postPath)
      .then(({ data }) => {
        dispatch(setPromoIsFavoriteAction(adaptServerFilmToClient(data).isFavorite));
        dispatch(setPostStatusAction(FetchStatus.Success));
      })
      .then(() => {
        dispatch(fetchFavoritesFilmsListAction());
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
        toast.error(ToastMessage.REMINDER_TO_SIGN_IN);
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Success));
      });
  }
);

export const postFilmIsFavoriteAction = (id: string, status: number): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPostStatusAction(FetchStatus.InProgress));
    await api.post(`${ ApiRoute.Favorite }/${ id }/${ status }`)
      .then(({data}) => {
        dispatch(loadCurrentFilmData(adaptServerFilmToClient(data)));
        dispatch(setPostStatusAction(FetchStatus.Success));
      })
      .then(() => {
        dispatch(fetchFavoritesFilmsListAction());
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
        toast.error(ToastMessage.REMINDER_TO_SIGN_IN);
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Success));
      });
  }
);
