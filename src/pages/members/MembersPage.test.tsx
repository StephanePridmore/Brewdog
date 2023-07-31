import React from 'react';
import MembersPage from './MembersPage';
import { renderWithProviders } from '../../tests/component.utils';
import { checkComponentWithText } from '../../tests/beers.context';

test('should render Members page', () => {
  renderWithProviders(<MembersPage />);
  checkComponentWithText(/Billable Members/i);

  checkComponentWithText(/members: 11/i);
  checkComponentWithText(/parent members: 4/i);
  checkComponentWithText(/errors: 5/i);

  checkComponentWithText(/member D: 4/i);
  checkComponentWithText(/member E: 5/i);
  checkComponentWithText(/member I: 9/i);
  checkComponentWithText(/member G: 7/i);
  checkComponentWithText(/member H: 8/i);
  checkComponentWithText(/member K: 11/i);

  checkComponentWithText(/Circular References/i);

  checkComponentWithText(/member A: 1/i);
  checkComponentWithText(/member B: 2/i);
  checkComponentWithText(/member C: 3/i);
  checkComponentWithText(/member F: 6/i);
  checkComponentWithText(/member J: 10/i);
});
