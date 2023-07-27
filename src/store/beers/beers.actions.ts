import { Beer } from "../../shared/models/Beer";

export enum BeerActionTypes {
  BeersRequested = "[BEERS] Beers Requested",
  BeersLoaded = "[BEERS] Beers Loaded",
  BeersLoadingFailed = "[BEERS] Beers Loading Failed",
}

export interface BeersRequestedAction {
  type: BeerActionTypes.BeersRequested;
  skip: number;
  pageSize: number;
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
  pageSize: number
): BeersRequestedAction => ({
  type: BeerActionTypes.BeersRequested,
  skip: skip,
  pageSize: pageSize,
});

export const beersLoaded = (beers: Beer[]): BeersLoadedAction => ({
  type: BeerActionTypes.BeersLoaded,
  beers: beers,
});

export const beersLoadingFailed = (): BeersLoadingFailedAction => ({
  type: BeerActionTypes.BeersLoadingFailed,
});

export type BeersActions =
  | BeersRequestedAction
  | BeersLoadedAction
  | BeersLoadingFailedAction;
