import React from 'react';
import { render, screen } from '@testing-library/react';
import BrewdogGrid from './BrewdogGrid';

test('renders learn react link', () => {
  render(<BrewdogGrid />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
