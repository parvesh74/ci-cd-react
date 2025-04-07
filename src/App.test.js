import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parvesh Mann on the screen', () => {
  render(<App />);
  const nameElement = screen.getByText(/Parvesh Mann/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders Software Development on the screen', () => {
  render(<App />);
  const courseElement = screen.getByText(/Software Development/i);
  expect(courseElement).toBeInTheDocument();
});
