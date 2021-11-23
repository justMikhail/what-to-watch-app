import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import browserHistory from '../../browser-history';
import {AppRoute} from '../../const/routs';
import PrivateRoute from '../private-route/private-route';
import {isCheckedAuth} from '../../utils/utils';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Loader from '../loader/loader';
import {getAuthorizationStatus} from '../../store/user-data-reducer/selectors';
import {getLoadedDataStatus} from '../../store/all-films-data-reducer/selectors';

const PromoFilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            title = {PromoFilmData.TITLE}
            genre = {PromoFilmData.GENRE}
            year = {PromoFilmData.YEAR}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListPage />}
        />
        <Route exact path={AppRoute.Film}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        />
        <Route exact path={AppRoute.Player}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
