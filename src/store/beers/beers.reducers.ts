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
        beers: action.beers.map((beer) => {
          return {
            ...beer,
            expanded: false,
          };
        }),
      };
    case BeerActionTypes.BeersLoadingFailed:
      return {
        ...state,
        error: action.error,
      };
    case BeerActionTypes.BeerExpanded:
      return {
        ...state,
        beers: state.beers.map((beer) => {
          if (beer.id === action.beerId) {
            return {
              ...beer,
              expanded: action.expanded,
            };
          } else {
            return beer;
          }
        }),
      };
    default:
      return state;
  }
};
