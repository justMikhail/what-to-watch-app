import {useDispatch, useSelector} from 'react-redux';
import {generatePath, useParams, Link} from 'react-router-dom';

import {getAllFilmsListData} from '../../../store/redusers/films-data-reducer/selectors';
import {postCurrentFilmComment} from '../../../store/api-actions';

import Header from '../../header/header';
import FormForAddReview from '../../form-for-add-review/form-for-add-review';
import NotFoundPage from '../not-found-page/not-found-page';
import {AppRoute} from '../../../const/routs';

function AddReviewPage(): JSX.Element {

  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const filmId = parseInt(params.id, 10);
  const currentFilm = useSelector(getAllFilmsListData).find((filmItem) => filmItem.id === filmId);

  const handlePostHandler = (currentFilmId: number, reviewData: {rating: number, comment: string}) => {
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
            width={218}
            height={327}
          />
        </div>
      </div>

      <div className="add-review">
        <FormForAddReview currentFilmId={currentFilm.id} onPost={handlePostHandler} />
      </div>
    </section>
  );

}

export default AddReviewPage;
