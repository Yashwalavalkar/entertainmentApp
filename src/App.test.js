import { render, screen } from '@testing-library/react';
import App from './App';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.css'; 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
