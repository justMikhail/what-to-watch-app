import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {getUserFavirteFilmsList} from '../../../store/redusers/user-data-reducer/selectors';
import FilmsList from '../../films-list/films-list';
import {useEffect} from 'react';
import {fetchFavoritesFilmsListAction} from '../../../store/api-actions';

function MyListPage(): JSX.Element {
  const dispatch = useDispatch();
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
        <FilmsList filmsForRender={userFavoriteFilmsList} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
