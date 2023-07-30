import React from 'react';
import BrewdogGrid from './BrewdogGrid';
import { renderWithProviders } from '../../../../tests/component.utils';
import { createTestBeers } from '../../../../tests/beers.provider';
import { AppState } from '../../../../store/store';
import { beersInitialState } from '../../../../store/beers/beers.state';
import { checkComponentWithText } from '../../../../tests/beers.context';

test('should render Brewdog Grid with beers', () => {
  const state = { beers: { ...beersInitialState, beers: createTestBeers() } } as AppState;
  renderWithProviders(<BrewdogGrid />, { preloadedState: state });
  checkComponentWithText(/Buzz/i);
  checkComponentWithText(/Trashy Blonde/i);
  checkComponentWithText(/Berliner Weisse With Yuzu - B-Sides/i);
  checkComponentWithText(/Pilsen Lager/i);
  checkComponentWithText(/Avery Brown Dredge/i);
});
