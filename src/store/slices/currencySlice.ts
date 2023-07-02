import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageKeys } from '../LocalStorageKeys';

export interface State {
  fromCurrency: string;
  toCurrency: string;
}

let initialState: State = {
  fromCurrency: '',
  toCurrency: 'USD',
};

if (typeof window !== 'undefined') {
  initialState = JSON.parse(
    localStorage.getItem(LocalStorageKeys.CurrencyState) ||
      JSON.stringify(initialState),
  );
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setFromCurrency: (state, action) => {
      const temp = state.fromCurrency;
      state.fromCurrency = action.payload;

      if (action.payload === state.toCurrency) {
        state.toCurrency = temp;
      }
    },
    setToCurrency: (state, action) => {
      const temp = state.toCurrency;
      state.toCurrency = action.payload;

      if (action.payload === state.fromCurrency) {
        state.fromCurrency = temp;
      }
    },
    swapCurrencies: (state) => {
      const temp = state.fromCurrency;

      state.fromCurrency = state.toCurrency;
      state.toCurrency = temp;
    },
    setCurrencyState: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setFromCurrency, setToCurrency, swapCurrencies, setCurrencyState } =
  currencySlice.actions;

export default currencySlice.reducer;
