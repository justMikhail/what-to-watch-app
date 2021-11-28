import {Route, Redirect, RouteProps} from 'react-router-dom';
import {History} from 'history';

import {AppRoute} from '../../const/routs';
import {AuthorizationStatus} from '../../const/authorization-status';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/redusers/user-data-reducer/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render(routeProps)
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
