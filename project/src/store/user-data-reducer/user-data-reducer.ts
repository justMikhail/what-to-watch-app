import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorizationStatus, requireLogout} from '../action';
import {AuthorizationStatus} from '../../const/authorization-status';
import {UserData} from '../../types/state';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
