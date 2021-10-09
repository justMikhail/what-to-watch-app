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
        <Route exact path={AppRoute.Main}>
          <MainPage
            title={title}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyListPage />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewPage />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
