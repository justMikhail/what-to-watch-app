import Logo from '../../logo/Logo';
import FormForAddReview from '../../form-for-add-review/form-for-add-review';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getAllFilmsData} from '../../../store/films-data-reducer/selectors';


function AddReviewPage(): JSX.Element {
  const params = useParams<{ id: string }>();
  const filmId = parseInt(params.id, 10);
  const currentFilm = useSelector(getAllFilmsData).find((filmItem) => filmItem.id === filmId);

  const onPostHandler = (reviewData: {rating: number, comment: string}) => {
    console.log(reviewData)
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  The Grand Budapest Hotel
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
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
        <div className="film-card__poster film-card__poster--small">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width={218}
            height={327}
          />
        </div>
      </div>

      <div className="add-review">
        <FormForAddReview />
      </div>
    </section>
  );
}

export default AddReviewPage;
