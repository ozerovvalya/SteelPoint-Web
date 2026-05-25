export async function fetchCurrencyRates() {
  const response = await fetch('https://open.er-api.com/v6/latest/EUR')

  if (!response.ok) {
    throw new Error('Failed to fetch currency rates')
  }

  const data = await response.json()

  return {
    rates: {
      USD: data.rates.USD,
      GBP: data.rates.GBP
    }
  }
}