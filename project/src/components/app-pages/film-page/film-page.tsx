import {Link} from 'react-router-dom';
import {generatePath, useParams} from 'react-router-dom';

import {AppRoute} from '../../../const/routs';
import {FilmType} from '../../../types/film-type';

import Loader from '../../loader/loader';
import Logo from '../../logo/Logo';
import FilmsList from '../../films-list/films-list';
import {useSelector} from 'react-redux';
import {getAllFilmsData} from '../../../store/films-data-reducer/selectors';

type FilmPageParams = {
  id: string;
}

function FilmPage(): JSX.Element {

  const allFilms = useSelector(getAllFilmsData);
  const params = useParams<FilmPageParams>();
  const paramsId = parseInt(params.id, 10);
  const film: FilmType | undefined = allFilms.find((item) => item.id === paramsId);

  if (film) {
    const generatedAddReviewPagePath = generatePath(AppRoute.AddReview, {id: film.id});

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img
                src={film.backgroundImage}
                alt={film.name}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <Logo/>
              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img
                      src="img/avatar.jpg"
                      alt="User avatar"
                      width={63}
                      height={63}
                    />
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>
                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link className="btn film-card__button" to={generatedAddReviewPagePath}>Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={film.posterImage}
                  alt={film.name}
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
                  <div className="film-rating__score">{film.rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">240 ratings</span>
                  </p>
                </div>
                <div className="film-card__text">
                  <p>
                    {film.description}
                  </p>
                  <p className="film-card__director">
                    <strong>Director: {film.director}</strong>
                  </p>
                  <p className="film-card__starring">
                    <strong>Starring: {film.starring}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList />
          </section>
          <footer className="page-footer">
            <Logo />
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }

  return <Loader />;
}

export default FilmPage;
