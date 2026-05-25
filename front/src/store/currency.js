import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    selectedCurrency: 'EUR',
    rates: {}
  }),

  actions: {
    setCurrency(currency) {
      this.selectedCurrency = currency
    },

    setRates(rates) {
      this.rates = rates
    }
  }
})