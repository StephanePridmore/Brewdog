import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import { BeersState, beersInitialState } from './beers/beers.state';
import { beersReducers } from './beers/beers.reducers';
import { fetchBeersEpic } from './beers/beers.epics';
import { createEpicMiddleware } from 'redux-observable';

export interface AppState {
  beers: BeersState;
}

export const initialState: AppState = {
  beers: beersInitialState,
};

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
  });
};

export const rootReducer = combineReducers({
  beers: beersReducers,
});

export const epicMiddleware = createEpicMiddleware();
export const store = setupStore();
export const rootEpic = combineEpics(fetchBeersEpic);
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
