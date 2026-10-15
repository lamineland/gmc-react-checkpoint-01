import { render, screen } from '@testing-library/react';
import App from './App';
import product from './product';

test('renders the product card with the name, price and description from product.js', () => {
  render(<App />);
  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByText(/129\.99/)).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
});

test('renders the product image inside the card', () => {
  render(<App />);
  const image = screen.getByAltText(product.name);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', product.image);
});

test('greets the user by first name and shows an avatar when a first name is provided', () => {
  render(<App />);
  expect(screen.getByText(/Hello, Lamine!/)).toBeInTheDocument();
  expect(screen.getByAltText('Lamine avatar')).toBeInTheDocument();
});
