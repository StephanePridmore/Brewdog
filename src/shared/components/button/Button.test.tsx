import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const clickFn = jest.fn();

test('should render button with label', () => {
  render(<Button onClick={clickFn} label='Test label'></Button>);
  const component = screen.getByRole('button');
  expect(component).toBeInTheDocument();
  fireEvent.click(component);
  expect(clickFn).toHaveBeenCalled();
});
