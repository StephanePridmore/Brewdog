import React from 'react';
import { render } from '@testing-library/react';
import { checkComponentWithText } from '../../../../tests/beers.context';
import SummaryComponent from './Summary';

test('should render summary panel', () => {
  render(<SummaryComponent totalMembers={3} totalParents={2} totalErrors={1}></SummaryComponent>);
  checkComponentWithText(`members: 3`);
  checkComponentWithText(`parent members: 2`);
  checkComponentWithText(`errors: 1`);
});

test('should render summary panel', () => {
  render(<SummaryComponent totalMembers={6} totalParents={3} totalErrors={2}></SummaryComponent>);
  checkComponentWithText(`members: 6`);
  checkComponentWithText(`parent members: 3`);
  checkComponentWithText(`errors: 2`);
});
