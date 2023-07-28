import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductNameColumn } from './ProductNameColumn';
import { checkComponentTextByCssClass } from '../../../../../tests/beers.context';

test('renders Product Name Column', () => {
  render(
    <ProductNameColumn
      id='1'
      ariaColumnIndex={1}
      isSelected={false}
      dataIndex={1}
      dataItem={{ name: 'super smooth beer', tagline: 'some text' }}
    ></ProductNameColumn>,
  );
  const component = screen.getByTestId('product-name-container');
  checkComponentTextByCssClass(component, 'product-tag', 'some text');
});
