import {useEffect} from 'react';
import {generatePath, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {AppRoute} from '../../../const/routs';
import {getCurrentFilmData, getSimilarFilmsData} from '../../../store/current-film-reducer/selectors';
import {fetchCurrentFilmDataAction, fetchSimilarFilmsDataAction} from '../../../store/api-actions';

import Loader from '../../loader/loader';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import PrimaryButton from '../../primary-button/primary-button';
import {redirectToRoute} from '../../../store/action';

type FilmPageParams = {
  id: string;
}

function FilmPage(): JSX.Element {

  const dispatch = useDispatch();
  const currentFilmData = useSelector(getCurrentFilmData);
  const similarFilms = useSelector(getSimilarFilmsData);
  const params = useParams<FilmPageParams>();
  const filmId = parseInt(params.id, 10);

  useEffect(() => {
    dispatch(fetchCurrentFilmDataAction(filmId));
    dispatch(fetchSimilarFilmsDataAction(filmId));
  }, [dispatch, filmId]);

  if (!currentFilmData) {
    return <NotFoundPage />;
  }

  if (currentFilmData) {
    const generatedAddReviewPagePath = generatePath(AppRoute.AddReview, {id: currentFilmData.id});

    const onPlayButtonClickHandler = () => {
      dispatch(redirectToRoute(AppRoute.Player));
    };

    const onAddToMyListButtonClickHandler = () => {
      console.log('Add film to favorites');
    };

    const onAddReviewButtonClickHandler = () => {
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

                  <PrimaryButton buttonText="Add review" onButtonClickHandler={onAddReviewButtonClickHandler}/>

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
                  width={218}
                  height={327}
                />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">
                        Overview
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">
                        Details
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">{currentFilmData.rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">240 ratings</span>
                  </p>
                </div>

                <div className="film-card__text">
                  <p>
                    {currentFilmData.description}
                  </p>
                  <p className="film-card__director">
                    <strong>Director: {currentFilmData.director}</strong>
                  </p>
                  <p className="film-card__starring">
                    <strong>Starring: {currentFilmData.starring}</strong>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList filmsForRender={similarFilms} />
          </section>
          <Footer />
        </div>
      </>
    );
  }

  return <Loader />;
}

export default FilmPage;
