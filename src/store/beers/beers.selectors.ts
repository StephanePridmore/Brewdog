import { createSelector } from '@reduxjs/toolkit';
import { BeersState, GridState } from './beers.state';
import { AppState } from '../store';
import { Beer } from '../../shared/models/Beer';

const beersStateSelector = (state: AppState): BeersState => state.beers;

export const beersSelector = createSelector(
  beersStateSelector,
  (state: BeersState): Beer[] => state.beers,
);

export const gridStateSelector = createSelector(
  beersStateSelector,
  (state: BeersState): GridState => state.gridState,
);

export const abvSelector = createSelector(
  beersStateSelector,
  (state: BeersState): number | undefined => state.gridState.abv,
);

export const errorSelector = createSelector(
  beersStateSelector,
  (state: BeersState): string => state.error,
);
