import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './store/reducer';

import App from './components/app/app';
import {requireAuthorizationStatus} from './store/action';
import {AuthorizationStatus} from './const/authorization-status';
import {ThunkAppDispatch} from './types/actions-types';
import {checkAuthStatusAction, fetchFilmAction} from './store/api-actions';

const api = createApi(
  () => store.dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthStatusAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

