import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchButton from './Switch';

const clickFn = jest.fn();

test('should render switch with label', () => {
  render(<SwitchButton value={true} label='Test Label' onChange={clickFn}></SwitchButton>);
  const component = screen.getByText(/Test label/i);
  expect(component).toBeInTheDocument();
});
