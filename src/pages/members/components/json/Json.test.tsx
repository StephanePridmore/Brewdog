import React from 'react';
import { render } from '@testing-library/react';
import JsonComponent from './Json';
import { checkComponentWithText } from '../../../../tests/beers.context';

test('should render json data', () => {
  render(
    <JsonComponent
      data={{
        id: 50,
        status: 'single',
      }}
    ></JsonComponent>,
  );
  checkComponentWithText(`{ "id": 50, "status": "single" }`);
});

test('should render json data', () => {
  render(
    <JsonComponent
      data={{
        id: 20,
        name: 'Budweiser',
        abv: 30,
      }}
    ></JsonComponent>,
  );
  checkComponentWithText(`{ "id": 20, "name": "Budweiser", "abv": 30 }`);
});
