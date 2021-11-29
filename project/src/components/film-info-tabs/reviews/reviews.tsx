import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getFilmReviewsData} from '../../../store/redusers/current-film-reducer/selectors';
import {fetchCurrentFilmReviewsAction} from '../../../store/api-actions';
import {getCommentsListGetStatus} from '../../../store/redusers/fetch-status-reducer/selectors';
import {FetchStatus} from '../../../const/fetch-status';
import Review from './review/review';
import SmallLoader from '../../small-loader/small-loader';

type ReviewsProps = {
  filmId: number,
}

function Reviews(props: ReviewsProps): JSX.Element {
  const {filmId} = props;
  const dispatch = useDispatch();
  const reviewsListGetStatus = useSelector(getCommentsListGetStatus);
  const reviewsList = useSelector(getFilmReviewsData);

  useEffect(() => {
    dispatch(fetchCurrentFilmReviewsAction(filmId));
  }, [filmId, dispatch]);

  const reviewElements = reviewsList.map((review) => (<Review key={review.id} review={review}/>));
  const itemsCountPerColumn = Math.ceil(reviewElements.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      {reviewsListGetStatus === FetchStatus.Error && <SmallLoader />}
      {reviewsListGetStatus === FetchStatus.Success &&
        <>
          <div className="film-card__reviews-col">
            {reviewElements.slice(0, itemsCountPerColumn)}
          </div>
          <div className="film-card__reviews-col">
            {reviewElements.slice(itemsCountPerColumn)}
          </div>
        </>}
    </div>
  );
}

export default Reviews;
