import React, { useEffect, useState } from "react";
import Dropdown from "./assets/Dropdown";

const CurrencyConverter = () => {
  // Our API from frankfurter.com -> https://api.frankfurter.app/currencies
  // 31 currencies included

  // Firstly, we have a state to contain currencies.
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState(1);

  // FROM AND TO STATE
  const [fromCurrency, setFromCurrency] = useState(["USD"]);
  const [toCurrency, setToCurrency] = useState(["TRY"]);

  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencyList(Object.keys(data)); // Changed setCurrencyList(data) because the data we are fetching is not an ARRAY, it's an OBJECT
    } catch (error) {
      console.error("Error fetching currencies", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(currencyList);

  const convertCurrency = async () => {
    if (!amount) return;
    setIsConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();

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
    // WE SIMPLY SWAP CURRENCIES WITH THAT
  };

  return (
    <div className="max-w-xl mx-auto p-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-10">Currency Converter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        {/* Logic behind that first Dropdown is from and second one is To dropdown. */}
        <Dropdown
          currencyList={currencyList}
          label="From"
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
        {/* WE LL AD  SWAP CURRENCY BUTTON */}
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
          <div className="mt-4 text-lg font-medium text-right text-blue">
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
