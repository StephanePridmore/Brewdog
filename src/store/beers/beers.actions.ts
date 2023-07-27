import { Beer } from '../../shared/models/Beer';

export enum BeerActionTypes {
  BeersRequested = '[BEERS] Beers Requested',
  BeersLoaded = '[BEERS] Beers Loaded',
  BeersLoadingFailed = '[BEERS] Beers Loading Failed',
}

export interface BeersRequestedAction {
  type: BeerActionTypes.BeersRequested;
  skip: number;
  pageSize: number;
  abv: number | undefined;
}

export interface BeersLoadedAction {
  type: BeerActionTypes.BeersLoaded;
  beers: Beer[];
}

export interface BeersLoadingFailedAction {
  type: BeerActionTypes.BeersLoadingFailed;
}

export const beersRequested = (
  skip: number,
  pageSize: number,
  abv: number | undefined,
): BeersRequestedAction => ({
  type: BeerActionTypes.BeersRequested,
  skip: skip,
  pageSize: pageSize,
  abv: abv,
});

export const beersLoaded = (beers: Beer[]): BeersLoadedAction => ({
  type: BeerActionTypes.BeersLoaded,
  beers: beers,
});

export const beersLoadingFailed = (): BeersLoadingFailedAction => ({
  type: BeerActionTypes.BeersLoadingFailed,
});

export type BeersActions = BeersRequestedAction | BeersLoadedAction | BeersLoadingFailedAction;
