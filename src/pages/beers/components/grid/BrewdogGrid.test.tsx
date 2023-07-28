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
  checkComponentWithText(/Mashtag 2015/i);
  checkComponentWithText(/US Hopped Black Barley Wine./i);
  checkComponentWithText(/Everday Anarchy/i);
  checkComponentWithText(/Peach Therapy/i);
  checkComponentWithText(/US Style Barley Wine./i);
});
