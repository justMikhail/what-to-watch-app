import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const/app-route';
import {AuthorizationStatus} from '../../const/authorization-status';
import PrivateRoute from '../private-route/private-route';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import {FilmType} from '../../types/film-type';

type AppProps  = {
  title: string;
  genre: string;
  year: number;
  films: FilmType[];
}

function App({title, genre, year, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            title={title}
            genre={genre}
            year={year}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyListPage films={films}/>}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
        <Route exact path={AppRoute.FILM}>
          <FilmPage films={films}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={() => <AddReviewPage />}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
        <Route exact path={AppRoute.PLAYER}>
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
