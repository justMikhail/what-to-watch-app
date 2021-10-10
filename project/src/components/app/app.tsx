import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const/app-route';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import MoviePage from '../pages/movie-page/movie-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';


type PromoFilmProps  = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: PromoFilmProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            title={title}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListPage />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewPage />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
