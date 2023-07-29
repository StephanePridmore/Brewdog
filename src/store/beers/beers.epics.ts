import { ofType } from 'redux-observable';
import {
  BeerActionTypes,
  BeersRequestedAction,
  beersLoaded,
  beersLoadingFailed,
} from './beers.actions';
import { mergeMap } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBeersEpic = (action$: any) =>
  action$.pipe(
    ofType(BeerActionTypes.BeersRequested),
    mergeMap((action: BeersRequestedAction) =>
      fetch(
        `https://api.punkapi.com/v2/beers?page=${action.skip / 10 + 1}&per_page=${action.pageSize}${
          action.abv ? '&abv_gt=' + action.abv : ''
        }`,
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => beersLoaded(data))
        .catch((error) => beersLoadingFailed(error)),
    ),
  );
