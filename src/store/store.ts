import { configureStore } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import { BeersState, beersInitialState } from './beers/beers.state';
import { beersReducers } from './beers/beers.reducers';
import { fetchBeersEpic } from './beers/beers.effects';
import { createEpicMiddleware } from 'redux-observable';

export interface AppState {
  beers: BeersState;
}

export const initialState: AppState = {
  beers: beersInitialState,
};

const epicMiddleware = createEpicMiddleware();
export const store = configureStore({
  reducer: {
    beers: beersReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

export const rootEpic = combineEpics(fetchBeersEpic);
epicMiddleware.run(rootEpic);
