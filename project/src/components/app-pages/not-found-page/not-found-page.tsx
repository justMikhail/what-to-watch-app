import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const/routs';
import styles from './not-found-page.module.css';
import img from'./img/not-found-page-img.jpg';
import Footer from '../../footer/footer';

function NotFoundPage(): JSX.Element {
  const location = useLocation();
  const locationPath = location.pathname;

  return (
    <div className="page-content">
      <section className="container">
        <div className={styles.not_found_wrapper}>
          <h1 className="visually-hidden">404 Page Not Found</h1>
          <img className={styles.img} src={img} alt="Not Found"/>
          <p className={styles.text}>
            No match for <u>{locationPath}</u>
          </p>
          <Link to={AppRoute.Main}>
            <button className="btn film-card__button" type="button">
              <span>Back to main page</span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
