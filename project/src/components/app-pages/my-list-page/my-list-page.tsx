
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {fetchFavoritesFilmsListAction} from '../../../store/api-actions';
import {getFavoritesFilmsListGetStatus} from '../../../store/redusers/fetch-status-reducer/selectors';
import {getUserFavirteFilmsList} from '../../../store/redusers/user-data-reducer/selectors';
import {FetchStatus} from '../../../const/fetch-status';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import SmallLoader from '../../small-loader/small-loader';
import FilmsList from '../../films-list/films-list';

function MyListPage(): JSX.Element {
  const dispatch = useDispatch();
  const userFavoriteFilmsListGetStatus = useSelector(getFavoritesFilmsListGetStatus);
  const userFavoriteFilmsList = useSelector(getUserFavirteFilmsList);

  useEffect(() => {
    dispatch(fetchFavoritesFilmsListAction());
  }, [dispatch]);

  return (
    <div className="user-page">

      <Header userPage>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {userFavoriteFilmsListGetStatus !== FetchStatus.Error
          ? <FilmsList filmsForRender={userFavoriteFilmsList} />
          : <SmallLoader />}
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
