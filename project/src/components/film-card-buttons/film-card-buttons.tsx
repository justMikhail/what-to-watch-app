import PrimaryButton from '../primary-button/primary-button';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const/routs';
import {useDispatch} from 'react-redux';

function FilmCardButtons(): JSX.Element {
  const dispatch = useDispatch();

  const handlePlayButtonClick = () => {
    dispatch(redirectToRoute(AppRoute.Player));
  };

  const handleAddToMyListButtonClick = () => {
    dispatch(redirectToRoute(AppRoute.Player));
  };

  return (
    <div className="film-card__buttons">

      <PrimaryButton buttonText="Play" onButtonClickHandler={handlePlayButtonClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
      </PrimaryButton>

      <PrimaryButton buttonText="My List" onButtonClickHandler={handleAddToMyListButtonClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#add" />
        </svg>
      </PrimaryButton>

      {/*<PrimaryButton buttonText="Add review" onButtonClickHandler={onAddReviewButtonClickHandler}/>*/}

    </div>
  );
}

export default FilmCardButtons;


