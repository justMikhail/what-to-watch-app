import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import browserHistory from '../../browser-history';
import {AppRoute} from '../../const/routs';
import PrivateRoute from '../private-route/private-route';
import {isCheckedAuth} from '../../utils/utils';

import MainPage from '../app-pages/main-page/main-page';
import SignInPage from '../app-pages/sign-in-page/sign-in-page';
import MyListPage from '../app-pages/my-list-page/my-list-page';
import FilmPage from '../app-pages/film-page/film-page';
import AddReviewPage from '../app-pages/add-review-page/add-review-page';
import PlayerPage from '../app-pages/player-page/player-page';
import NotFoundPage from '../app-pages/not-found-page/not-found-page';
import Loader from '../loader/loader';
import {getAuthorizationStatus} from '../../store/user-data-reducer/selectors';
import {getLoadedDataStatus} from '../../store/films-data-reducer/selectors';

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
          <MainPage />
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
