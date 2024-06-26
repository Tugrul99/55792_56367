import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../assets/Dropdown';

test('renders Dropdown with currencies', () => {
  const currencies = ['USD', 'EUR', 'TRY'];
  render(<Dropdown currencyList={currencies} selectedCurrency="USD" onCurrencyChange={() => {}} label="From" />);

  currencies.forEach(currency => {
    expect(screen.getByText(currency)).toBeInTheDocument();
  });
});

test('calls onCurrencyChange when a new currency is selected', () => {
  const currencies = ['USD', 'EUR', 'TRY'];
  const onCurrencyChange = jest.fn();
  render(<Dropdown currencyList={currencies} selectedCurrency="USD" onCurrencyChange={onCurrencyChange} label="From" />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'EUR' } });
  expect(onCurrencyChange).toHaveBeenCalledWith('EUR');
});
