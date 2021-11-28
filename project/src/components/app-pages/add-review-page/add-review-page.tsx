import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {getAllFilmsData} from '../../../store/redusers/films-data-reducer/selectors';
import {postFilmComment} from '../../../store/api-actions';

import Header from '../../header/header';
import FormForAddReview from '../../form-for-add-review/form-for-add-review';
import NotFoundPage from '../not-found-page/not-found-page';

function AddReviewPage(): JSX.Element {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const filmId = parseInt(params.id, 10);
  const currentFilm = useSelector(getAllFilmsData).find((filmItem) => filmItem.id === filmId);

  const onPostHandler = (currentFilmId: number, reviewData: {rating: number, comment: string}) => {
    dispatch(postFilmComment(currentFilmId, reviewData));
  };

  if (!currentFilm) {
    return <NotFoundPage />;
  }

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

        <Header />

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
        <FormForAddReview currentFilmId={currentFilm.id} onPost={onPostHandler} />
      </div>
    </section>
  );

}

export default AddReviewPage;
