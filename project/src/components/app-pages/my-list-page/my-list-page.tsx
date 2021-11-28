import Header from '../../header/header';
import Footer from '../../footer/footer';
import {useSelector} from 'react-redux';
import {getUserFavirteFilmsList} from '../../../store/redusers/user-data-reducer/selectors';
import FilmsList from '../../films-list/films-list';

function MyListPage(): JSX.Element {
  const userFavoriteFilmsList = useSelector(getUserFavirteFilmsList);

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
