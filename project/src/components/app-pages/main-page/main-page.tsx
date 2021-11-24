import {useSelector} from 'react-redux';

import {getSelectedGenre} from '../../../store/films-data-reducer/selectors';
import {getAllFilmsData} from '../../../store/films-data-reducer/selectors';
import {filterFilmsBySelectedGenre} from '../../../utils/utils';

import FilmsList from '../../films-list/films-list';
import GenreList from '../../genre-list/genre-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';

type MainPageProps = {
  title: string;
  genre: string;
  year: number;
}

function MainPage(props: MainPageProps): JSX.Element {
  const {title, genre, year} = props;
  const selectedGenre = useSelector(getSelectedGenre);
  const filmForRender = filterFilmsBySelectedGenre(useSelector(getAllFilmsData), selectedGenre);

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
                {title}
              </h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {genre}
                </span>
                <span className="film-card__year">
                  {year}
                </span>
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

