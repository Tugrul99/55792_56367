import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CurrencyConverter from '../CurrencyConverter';

test('renders CurrencyConverter and performs conversion', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        rates: { TRY: 1800 }
      })
    })
  );

  await act(async () => {
    render(<CurrencyConverter />);
  });

  fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '100' } });
  const convertButtons = screen.getAllByText(/convert/i);
  fireEvent.click(convertButtons[convertButtons.length - 1]);  // Son düğmeyi tıklıyoruz

  const convertedAmount = await screen.findByTestId('converted-amount');
  expect(convertedAmount).toHaveTextContent('Converted Amount: 1800 TRY');
});
