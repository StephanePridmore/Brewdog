import { beersLoaded, beersLoadingFailed, beersRequested } from './beers.actions';
import { beersReducers } from './beers.reducers';
import { BeersState, beersInitialState } from './beers.state';
import { createTestBeers } from '../../tests/beers.provider';

let initialState: BeersState;

test('beers Reducer: should return the default state', () => {
  initialState = beersInitialState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const action = { type: 'NOOP' } as any;
  const result = beersReducers(undefined, action);
  expect(result).toBe(initialState);
});

test('beers Reducer: should return beers after fetch success', () => {
  initialState = beersInitialState;
  const beers = createTestBeers();
  const action = beersLoaded(beers);

  const result = beersReducers(initialState, action);

  expect(result.beers.length).toBe(10);
});

test('beers Reducer: should request beers from 0 to 10', () => {
  initialState = beersInitialState;
  const action = beersRequested(0, 10, undefined);

  const result = beersReducers(initialState, action);

  expect(result.gridState.skip).toBe(0);
  expect(result.gridState.pageSize).toBe(10);
  expect(result.gridState.abv).toBe(undefined);
});

test('beers Reducer: should request beers from 20 to 30', () => {
  initialState = beersInitialState;
  const action = beersRequested(20, 10, undefined);

  const result = beersReducers(initialState, action);

  expect(result.gridState.skip).toBe(20);
  expect(result.gridState.pageSize).toBe(10);
  expect(result.gridState.abv).toBe(undefined);
});

test('beers Reducer: should request beers from 50 to 70', () => {
  initialState = beersInitialState;
  const action = beersRequested(50, 20, undefined);

  const result = beersReducers(initialState, action);

  expect(result.gridState.skip).toBe(50);
  expect(result.gridState.pageSize).toBe(20);
  expect(result.gridState.abv).toBe(undefined);
});

test('beers Reducer: should request beers with abv greater than 8', () => {
  initialState = beersInitialState;
  const action = beersRequested(50, 20, 8);

  const result = beersReducers(initialState, action);

  expect(result.gridState.skip).toBe(50);
  expect(result.gridState.pageSize).toBe(20);
  expect(result.gridState.abv).toBe(8);
});

test('beers Reducer: should not return beers if loading is unsuccessful', () => {
  initialState = beersInitialState;
  const action = beersLoadingFailed('error message');

  const result = beersReducers(initialState, action);

  expect(result.error).toBe('error message');
});
