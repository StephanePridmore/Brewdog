import React from 'react';
import { render } from '@testing-library/react';
import { checkComponentWithText } from '../../../../tests/beers.context';
import { createTestBeers } from '../../../../tests/beers.provider';
import MaltComponent from './Malt';

test('should render Malt Component', () => {
  const beer = createTestBeers()[0];
  const malt = beer.ingredients.malt[0];
  render(<MaltComponent index={1} malt={malt}></MaltComponent>);
  checkComponentWithText('Maris Otter Extra Pale');
  checkComponentWithText('3.3 kilograms');
});
