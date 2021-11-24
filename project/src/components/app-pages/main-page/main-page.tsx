import {useSelector, useDispatch} from 'react-redux';

import {getPromoFilmsData, getSelectedGenre} from '../../../store/films-data-reducer/selectors';
import {getAllFilmsData} from '../../../store/films-data-reducer/selectors';
import {filterFilmsBySelectedGenre} from '../../../utils/utils';

import FilmsList from '../../films-list/films-list';
import GenreList from '../../genre-list/genre-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import {useEffect} from 'react';
import {fetchPromoFilmDataAction} from '../../../store/api-actions';
import PrimaryButton from '../../primary-button/primary-button';
import {redirectToRoute} from '../../../store/action';
import {AppRoute} from '../../../const/routs';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const promoFilm = useSelector(getPromoFilmsData);
  const selectedGenre = useSelector(getSelectedGenre);
  const filmForRender = filterFilmsBySelectedGenre(useSelector(getAllFilmsData), selectedGenre);

  const onPlayButtonClickHandler = () => {
    dispatch(redirectToRoute(AppRoute.Player));
  };

  const onAddToMyListButtonClickHandler = () => {
    console.log('Add film to favorites');
  };

  useEffect(() => {
    dispatch(fetchPromoFilmDataAction());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">

              <h2 className="film-card__title">
                {promoFilm.name}
              </h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {promoFilm.genre}
                </span>
                <span className="film-card__year">
                  {promoFilm.released}
                </span>
              </p>

              <div className="film-card__buttons">

                <PrimaryButton buttonText="Play" onButtonClickHandler={onPlayButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                </PrimaryButton>

                <PrimaryButton buttonText="My List" onButtonClickHandler={onAddToMyListButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#add" />
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
          <FilmsList filmsForRender={filmForRender} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

