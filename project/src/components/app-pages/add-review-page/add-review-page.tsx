import {useDispatch, useSelector} from 'react-redux';
import {generatePath, useParams, Link} from 'react-router-dom';

import {getAllFilmsListData} from '../../../store/redusers/films-data-reducer/selectors';
import {postCurrentFilmComment} from '../../../store/api-actions';
import {AppRoute} from '../../../const/routs';

import Header from '../../header/header';
import FormForAddReview from '../../form-for-add-review/form-for-add-review';
import NotFoundPage from '../not-found-page/not-found-page';

const POSTER_WIDTH = 218;
const POSTER_HEIGHT = 327;

function AddReviewPage(): JSX.Element {

  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const filmId = parseInt(params.id, 10);
  const currentFilm = useSelector(getAllFilmsListData).find((filmItem) => filmItem.id === filmId);

  const handlePost = (currentFilmId: number, reviewData: {rating: number, comment: string}) => {
    dispatch(postCurrentFilmComment(currentFilmId, reviewData));
  };

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  const generatedFilmPagePath = generatePath(AppRoute.Film, {id: currentFilm.id});

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">

        <div className="film-card__bg">
          <img
            src={currentFilm.backgroundImage}
            alt={currentFilm.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatedFilmPagePath} className="breadcrumbs__link">
                  {currentFilm.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={currentFilm.posterImage}
            alt={currentFilm.name}
            width={POSTER_WIDTH}
            height={POSTER_HEIGHT}
          />
        </div>
      </div>

      <div className="add-review">
        <FormForAddReview currentFilmId={currentFilm.id} handlePost={handlePost} />
      </div>
    </section>
  );

}

export default AddReviewPage;
