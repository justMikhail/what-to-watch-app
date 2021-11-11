import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {AppRout} from '../../const/routs';
import {AuthorizationStatus} from '../../const/authorization-status';
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

import {State} from '../../types/state';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRout.Main}>
          <MainPage
            title={title}
            genre={genre}
            year={year}
            films={films}
          />
        </Route>
        <Route exact path={AppRout.SignIn}>
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRout.MyList}
          render={() => <MyListPage />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRout.Film}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRout.AddReview}
          render={() => <AddReviewPage />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRout.Player}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
