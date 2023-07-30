import React from 'react';
import { render } from '@testing-library/react';
import HopComponent from './Hop';
import { checkComponentWithText } from '../../../../tests/beers.context';
import { createTestBeers } from '../../../../tests/beers.provider';

test('should render Hop component', () => {
  const beer = createTestBeers()[0];
  const hop = beer.ingredients.hops[0];
  render(<HopComponent index={1} hop={hop}></HopComponent>);
  checkComponentWithText('Fuggles');
  checkComponentWithText('bitter');
  checkComponentWithText('25 grams');
  checkComponentWithText('Added at the start');
});
