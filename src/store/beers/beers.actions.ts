import { Beer } from '../../shared/models/Beer';

export enum BeerActionTypes {
  BeersRequested = '[BEERS] Beers Requested',
  BeersLoaded = '[BEERS] Beers Loaded',
  BeersLoadingFailed = '[BEERS] Beers Loading Failed',
  BeerExpanded = '[BEERS] Expand Detail',
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
  error: string;
}

export interface BeerExpandedAction {
  type: BeerActionTypes.BeerExpanded;
  beerId: number;
  expanded: boolean;
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

export const beersLoadingFailed = (error: string): BeersLoadingFailedAction => ({
  type: BeerActionTypes.BeersLoadingFailed,
  error: error,
});

export const beerExpanded = (beerId: number, expanded: boolean): BeerExpandedAction => ({
  type: BeerActionTypes.BeerExpanded,
  beerId,
  expanded,
});

export type BeersActions =
  | BeerExpandedAction
  | BeersRequestedAction
  | BeersLoadedAction
  | BeersLoadingFailedAction;
