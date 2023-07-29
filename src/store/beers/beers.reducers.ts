import { BeerActionTypes, BeersActions } from './beers.actions';
import { BeersState, beersInitialState } from './beers.state';

export const beersReducers = (state = beersInitialState, action: BeersActions): BeersState => {
  switch (action.type) {
    case BeerActionTypes.BeersRequested:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          skip: action.skip,
          pageSize: action.pageSize,
          abv: action.abv,
        },
      };
    case BeerActionTypes.BeersLoaded:
      return {
        ...state,
        beers: action.beers,
      };
    case BeerActionTypes.BeersLoadingFailed:
      return {
        ...state,
        error: action.error,
      };
      };
    default:
      return state;
  }
};
