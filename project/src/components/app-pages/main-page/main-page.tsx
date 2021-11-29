import {useEffect} from 'react';
import {generatePath} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {
  getAllFilmsListData,
  getPromoFilmsData,
  getSelectedGenre
} from '../../../store/redusers/films-data-reducer/selectors';

import {
  fetchCurrentFilmDataAction,
  fetchPromoFilmDataAction,
  postPromoIsFavoriteAction
} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {getAuthorizationStatus} from '../../../store/redusers/user-data-reducer/selectors';
import {getAllFilmsListGetStatus, getPromoFilmGetStatus} from '../../../store/redusers/fetch-status-reducer/selectors';

import {AuthorizationStatus} from '../../../const/authorization-status';
import {filterFilmsBySelectedGenre} from '../../../utils/utils';
import {AddToMyListBurronIcon} from '../../../const/const';
import {AppRoute} from '../../../const/routs';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import FilmsList from '../../films-list/films-list';
import GenreList from '../../genre-list/genre-list';
import PrimaryButton from '../../primary-button/primary-button';
import Loader from '../../loader/loader';
import {FetchStatus} from '../../../const/fetch-status';

function MainPage(): JSX.Element {

  const dispatch = useDispatch();
  const promoFilmDataGetStatus = useSelector(getPromoFilmGetStatus);
  const allFilmsListGetStatus = useSelector(getAllFilmsListGetStatus);
  const promoFilmData = useSelector(getPromoFilmsData);
  const selectedGenre = useSelector(getSelectedGenre);
  const filmsListForRender = filterFilmsBySelectedGenre(useSelector(getAllFilmsListData), selectedGenre);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const addToMyListButtonIcon = promoFilmData.isFavorite
    ? AddToMyListBurronIcon.Favorite
    : AddToMyListBurronIcon.NotFavorite;

  const handlePlayButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    const generatedPlayerPath = generatePath(AppRoute.Player, {id: promoFilmData.id});
    dispatch(fetchCurrentFilmDataAction(promoFilmData.id));
    dispatch(redirectToRoute(generatedPlayerPath));
  };

  const handleAddToMyListButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(postPromoIsFavoriteAction(promoFilmData.id, promoFilmData.isFavorite));
  };

  useEffect(() => {
    dispatch(fetchPromoFilmDataAction());
  }, [dispatch]);

  if (promoFilmDataGetStatus !== FetchStatus.Success && allFilmsListGetStatus !== FetchStatus.Success) {
    return <Loader />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilmData.backgroundImage}
            alt={promoFilmData.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilmData.posterImage}
                alt={promoFilmData.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">

              <h2 className="film-card__title">{promoFilmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmData.genre}</span>
                <span className="film-card__year">{promoFilmData.released}</span>
              </p>

              <div className="film-card__buttons">

                <PrimaryButton buttonText="Play" onButtonClickHandler={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                </PrimaryButton>

                <PrimaryButton buttonText="My List" onButtonClickHandler={handleAddToMyListButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref={addToMyListButtonIcon} />
                  </svg>
                </PrimaryButton>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList filmsForRender={filmsListForRender} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

