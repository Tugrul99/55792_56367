import React from "react";

const Dropdown = ({ currencyList, selectedCurrency, onCurrencyChange, label = "" }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-3 relative">
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full border rounded-md shadow-sm "
        >
          {currencyList?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
