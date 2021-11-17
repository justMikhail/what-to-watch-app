import {Middleware} from 'redux';

import browserHistory from '../browser-history';
import {reducer} from '../store/reducer';
import {ActionType} from '../types/actions-types';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
