import {FilmType} from '../../../types/film-type';
import {formatRating, getFilmRatingDescription} from '../../../utils/utils';

type OverviewProps = {
  film: FilmType,
}

function Overview(props: OverviewProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = props.film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{formatRating(rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingDescription(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring: {starring?.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
