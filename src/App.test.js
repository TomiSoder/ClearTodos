import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('add todo', () => {
  render(<App />)

  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, {target: { value: 'Tee tehtävät loppuun'} });

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, {target: { value: '09.03.2022' } })

  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  const tablecell = screen.getByText(/tee tehtävät loppuun/i);
  expect(tablecell).toBeInTheDocument();

  const clearButton = screen.getByText('Clear');
  fireEvent.click(clearButton);

  expect(tablecell).not.toBeInTheDocument();

})