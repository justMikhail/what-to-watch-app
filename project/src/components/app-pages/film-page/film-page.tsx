import {useEffect} from 'react';
import {generatePath, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {AppRoute} from '../../../const/routs';
import {getCurrentFilmData, getSimilarFilmsData} from '../../../store/redusers/current-film-reducer/selectors';

import {
  fetchCurrentFilmDataAction,
  fetchSimilarFilmsDataAction,
  postFilmIsFavoriteAction
} from '../../../store/api-actions';

import Loader from '../../loader/loader';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import PrimaryButton from '../../primary-button/primary-button';
import {redirectToRoute} from '../../../store/action';
import FilmInfoTabs from '../../film-info-tabs/film-info-tabs';
import {AddToMyListBurronIcon} from '../../../const/const';
import {AuthorizationStatus} from '../../../const/authorization-status';
import {getAuthorizationStatus} from '../../../store/redusers/user-data-reducer/selectors';
import {getCurrentFilmGetStatus, getSimilarFilmsListGetStatus} from '../../../store/redusers/fetch-status-reducer/selectors';
import {FetchStatus} from '../../../const/fetch-status';
import SmallLoader from '../../small-loader/small-loader';

type FilmPageParams = {
  id: string;
}

const POSTER_WIDTH = 218;
const POSTER_HEIGHT = 327;

function FilmPage(): JSX.Element {

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentFilmDataGetStatus = useSelector(getCurrentFilmGetStatus);
  const similarFilmsListDataGetStatus = useSelector(getSimilarFilmsListGetStatus);
  const currentFilmData = useSelector(getCurrentFilmData);
  const similarFilms = useSelector(getSimilarFilmsData);
  const params = useParams<FilmPageParams>();
  const filmId = parseInt(params.id, 10);

  useEffect(() => {
    dispatch(fetchCurrentFilmDataAction(filmId));
    dispatch(fetchSimilarFilmsDataAction(filmId));
  }, [dispatch, filmId]);

  if (!currentFilmData || currentFilmDataGetStatus !== FetchStatus.Success) {
    return <Loader />;
  }

  const generatedAddReviewPagePath = generatePath(AppRoute.AddReview, {id: currentFilmData.id});

  const addToMyListButtonIcon = currentFilmData.isFavorite
    ? AddToMyListBurronIcon.Favorite
    : AddToMyListBurronIcon.NotFavorite;

  const handlePlayButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    const generatedPlayerPath = generatePath(AppRoute.Player, {id: currentFilmData.id});
    dispatch(redirectToRoute(generatedPlayerPath));
  };

  const handleAddToMyListButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(postFilmIsFavoriteAction(currentFilmData.id, currentFilmData.isFavorite));
  };

  const handleAddReviewButtonClick = () => {
    dispatch(redirectToRoute(generatedAddReviewPagePath));
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={currentFilmData.backgroundImage}
              alt={currentFilmData.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header filmCard/>

          <div className="film-card__wrap">
            <div className="film-card__desc">

              <h2 className="film-card__title">{currentFilmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilmData.genre}</span>
                <span className="film-card__year">{currentFilmData.released}</span>
              </p>

              <div className="film-card__buttons">

                <PrimaryButton buttonText="Play" handleButtonClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                </PrimaryButton>

                <PrimaryButton buttonText="My List" handleButtonClick={handleAddToMyListButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={addToMyListButtonIcon} />
                  </svg>
                </PrimaryButton>

                <PrimaryButton buttonText="Add review" handleButtonClick={handleAddReviewButtonClick}/>

              </div>

            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilmData.posterImage}
                alt={currentFilmData.name}
                width={POSTER_WIDTH}
                height={POSTER_HEIGHT}
              />
            </div>

            <FilmInfoTabs film={currentFilmData} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilmsListDataGetStatus !== FetchStatus.Error
            ? <FilmsList filmsForRender={similarFilms} />
            : <SmallLoader />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
