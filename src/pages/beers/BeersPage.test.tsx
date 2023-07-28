import React from 'react';
import BeersPage from './BeersPage';
import { renderWithProviders } from '../../tests/component.utils';
import { checkComponentWithText } from '../../tests/beers.context';

test('should render beers page', () => {
  renderWithProviders(<BeersPage />);
  checkComponentWithText(/Brewdog's beers/i);
  checkComponentWithText(/Only strong beers ?/i);
});
