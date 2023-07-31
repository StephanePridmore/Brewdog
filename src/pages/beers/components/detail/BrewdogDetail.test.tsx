import React from 'react';
import { render, screen } from '@testing-library/react';
import BrewdogDetailComponent from './BrewdogDetail';
import { checkComponentAttribute, checkComponentWithText } from '../../../../tests/beers.context';
import { createTestBeers } from '../../../../tests/beers.provider';

test('should render Brewdog Grid Detail Row details', () => {
  const beer = createTestBeers()[0];
  render(<BrewdogDetailComponent dataIndex={1} dataItem={beer}></BrewdogDetailComponent>);
  checkComponentWithText('1');
  checkComponentWithText('Buzz');
  checkComponentWithText('A Real Bitter Experience.');
  checkComponentWithText(
    'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
  );
  const component = screen.getByRole('img');
  checkComponentAttribute(component, 'src', 'https://images.punkapi.com/v2/keg.png');
  checkComponentAttribute(component, 'alt', 'A Real Bitter Experience.');
});
