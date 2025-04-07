import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parveshdeep on the screen', () => {
  render(<App />);
  const nameElement = screen.getByText(/Parveshdeep/i);
  expect(nameElement).toBeInTheDocument();
});
