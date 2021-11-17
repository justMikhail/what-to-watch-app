import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {createApi} from './services/api';
import {reducer} from './store/reducer';
import {redirect} from './middlewares/redirect';

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
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthStatusAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

