import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
