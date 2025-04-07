import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parvesh Mann and Software Development', () => {
  render(<App />);
  expect(screen.getByText(/Parvesh Mann/i)).toBeInTheDocument();
  expect(screen.getByText(/Software Development/i)).toBeInTheDocument();
});
