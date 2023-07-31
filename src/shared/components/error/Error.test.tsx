import React from 'react';
import { AppState } from '../../../store/store';
import { beersInitialState } from '../../../store/beers/beers.state';
import { checkComponentNotInDocument, checkComponentWithText } from '../../../tests/beers.context';
import { renderWithProviders } from '../../../tests/component.utils';
import ErrorComponent from './Error';

test('should not render error component when no errors', () => {
  const state = { beers: { ...beersInitialState } } as AppState;
  renderWithProviders(<ErrorComponent />, { preloadedState: state });
  checkComponentNotInDocument('pre');
});

test('should render error component with error', () => {
  const state = { beers: { ...beersInitialState, error: 'some test error' } } as AppState;
  renderWithProviders(<ErrorComponent />, { preloadedState: state });
  checkComponentWithText(/some test error/i);
});
