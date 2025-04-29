import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders logo', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const logoElement = screen.getAllByRole('img');
  expect(logoElement[0]).toBeInTheDocument();
});

test('renders basic navigation', () => {
  render( <MemoryRouter><App /></MemoryRouter>);
  const navigationElements = screen.getAllByRole('listitem');
  expect(navigationElements).toHaveLength(4);
});
