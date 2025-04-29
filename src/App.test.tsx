import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders learn react link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const logoElement = screen.getByTestId('logo');
  expect(logoElement).toBeInTheDocument();
});

test('renders basic navigation', () => {
  render( <MemoryRouter><App /></MemoryRouter>);
  const navigationElements = screen.getAllByRole('listitem');
  expect(navigationElements).toHaveLength(4);
});
