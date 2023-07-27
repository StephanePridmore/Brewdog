import { beersLoaded, beersLoadingFailed, beersRequested } from './beers.actions';
import { beersReducers } from './beers.reducers';
import { BeersState, beersInitialState } from './beers.state';
import { createTestBeers } from '../../tests/beers';

describe('beers Reducer', () => {
  let initialState: BeersState;

  beforeEach(() => {
    initialState = beersInitialState;
  });

  it('should return the default state', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action = { type: 'NOOP' } as any;
    const result = beersReducers(undefined, action);
    expect(result).toBe(initialState);
  });

  it('should return beers after fetch success', () => {
    const beers = createTestBeers();
    const action = beersLoaded(beers);

    const result = beersReducers(initialState, action);

    expect(result.beers.length).toBe(10);
  });

  it('should request beers from 0 to 10', () => {
    const action = beersRequested(0, 10, undefined);

    const result = beersReducers(initialState, action);

    expect(result.gridState.skip).toBe(0);
    expect(result.gridState.pageSize).toBe(10);
    expect(result.gridState.abv).toBe(undefined);
  });

  it('should request beers from 20 to 30', () => {
    const action = beersRequested(20, 10, undefined);

    const result = beersReducers(initialState, action);

    expect(result.gridState.skip).toBe(20);
    expect(result.gridState.pageSize).toBe(10);
    expect(result.gridState.abv).toBe(undefined);
  });

  it('should request beers from 50 to 70', () => {
    const action = beersRequested(50, 20, undefined);

    const result = beersReducers(initialState, action);

    expect(result.gridState.skip).toBe(50);
    expect(result.gridState.pageSize).toBe(20);
    expect(result.gridState.abv).toBe(undefined);
  });

  it('should not return beers if loading is unsuccessful', () => {
    const action = beersLoadingFailed();

    const result = beersReducers(initialState, action);

    expect(result.beers.length).toBe(0);
  });
});
