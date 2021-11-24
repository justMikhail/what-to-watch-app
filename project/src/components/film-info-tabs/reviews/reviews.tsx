import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFilmReviewsData} from '../../../store/current-film-reducer/selectors';

import Review from './review/review';
import {fetchFilmReviewsAction} from '../../../store/api-actions';

type ReviewsProps = {
  filmId: number,
}

function Reviews(props: ReviewsProps): JSX.Element {
  const {filmId} = props;
  const dispatch = useDispatch();
  const reviews = useSelector(getFilmReviewsData);

  useEffect(() => {
    dispatch(fetchFilmReviewsAction(filmId));
  }, [filmId, dispatch]);

  const reviewElements = reviews.map((review) => (<Review key={review.id} review={review}/>));
  const itemsCountPerColumn = Math.ceil(reviewElements.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewElements.slice(0, itemsCountPerColumn)}
      </div>
      <div className="film-card__reviews-col">
        {reviewElements.slice(itemsCountPerColumn)}
      </div>
    </div>
  );
}

export default Reviews;
