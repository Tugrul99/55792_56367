import React, { useEffect, useState } from "react";
import Dropdown from "./assets/Dropdown";

const CurrencyConverter = () => {
<<<<<<< HEAD
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
=======
  // Our API from frankfurter.com -> https://api.frankfurter.app/currencies
  // 31 currencies included

  // Firstly, we have a state to contain currencies.
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState(1);

  // FROM AND TO STATE
  const [fromCurrency, setFromCurrency] = useState(["USD"]);
  const [toCurrency, setToCurrency] = useState(["TRY"]);

>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
<<<<<<< HEAD
      setCurrencyList(Object.keys(data));
=======
      setCurrencyList(Object.keys(data)); // Changed setCurrencyList(data) because the data we are fetching is not an ARRAY, it's an OBJECT
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
    } catch (error) {
      console.error("Error fetching currencies", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
<<<<<<< HEAD
=======
  console.log(currencyList);
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8

  const convertCurrency = async () => {
    if (!amount) return;
    setIsConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
<<<<<<< HEAD
=======

>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.error("Error fetching conversion rate", error);
    } finally {
      setIsConverting(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
<<<<<<< HEAD
=======
    // WE SIMPLY SWAP CURRENCIES WITH THAT
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
  };

  return (
    <div className="max-w-xl mx-auto p-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-10">Currency Converter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
<<<<<<< HEAD
=======
        {/* Logic behind that first Dropdown is from and second one is To dropdown. */}
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
        <Dropdown
          currencyList={currencyList}
          label="From"
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
<<<<<<< HEAD
=======
        {/* WE LL AD  SWAP CURRENCY BUTTON */}
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
        <div>
          <button onClick={swapCurrencies}>⥃</button>
        </div>
        <Dropdown
          currencyList={currencyList}
          label="To"
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
<<<<<<< HEAD
          id="amount"
=======
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full border-gray-50 mt-4 p-2 border focus:outline-none focus:ring-2 focus:ring-indigo-900"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-end mt-6">
          <button
            onClick={convertCurrency}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
        </div>
        {convertedAmount && (
<<<<<<< HEAD
          <div
            data-testid="converted-amount"  // Bu satırı ekleyin
            className="mt-4 text-lg font-medium text-right text-blue"
          >
=======
          <div className="mt-4 text-lg font-medium text-right text-blue">
>>>>>>> 554bbaeabd27892b5f4c16cab68b5b67950edcf8
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
