import {
  BeerActionTypes,
  BeersRequestedAction,
  beersLoaded,
  beersLoadingFailed,
} from "./beers.actions";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";

export const fetchBeersEpic = (action$: any) =>
  action$.pipe(
    ofType(BeerActionTypes.BeersRequested),
    mergeMap((action: BeersRequestedAction) =>
      fetch(`https://api.punkapi.com/v2/beers?page=${1}&per_page=${10}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => beersLoaded(data))
        .catch((error) => beersLoadingFailed())
    )
  );
