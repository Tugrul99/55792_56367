<<<<<<< HEAD
import React from "react";

const Dropdown = ({ currencyList, selectedCurrency, onCurrencyChange, label = "" }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Dropdown component for selecting currencies
const Dropdown = ({ currencyList, selectedCurrency, onCurrencyChange, label = "" }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
        {label}
      </label>
      <div className="mt-3 relative">
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full border rounded-md shadow-sm "
        >
<<<<<<< HEAD
=======
          {/* RENDER FAVORITES */}

>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
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

<<<<<<< HEAD
export default Dropdown;
=======
export default Dropdown;
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
