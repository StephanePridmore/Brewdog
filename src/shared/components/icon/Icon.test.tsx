import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './Icon';

test('should render icon button with icon', () => {
  render(<IconButton testId='testing' icon='bi-test-icon'></IconButton>);
  const component = screen.getByTestId('testing-icon');
  expect(component.className).toBe(`bi-test-icon`);
});
