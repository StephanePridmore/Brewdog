import React from 'react';
import { ProductImageColumn } from './ProductImageColumn';
import { render, screen } from '@testing-library/react';
import { checkComponentAttribute } from '../../../../../tests/beers.context';

test('renders Product Image Column', () => {
  render(
    <ProductImageColumn
      id='1'
      ariaColumnIndex={1}
      isSelected={false}
      dataIndex={1}
      dataItem={{ image_url: 'image/url.png', tagline: 'some text' }}
    ></ProductImageColumn>,
  );
  const component = screen.getByRole('img');
  checkComponentAttribute(component, 'src', 'image/url.png');
  checkComponentAttribute(component, 'alt', 'some text');
});
