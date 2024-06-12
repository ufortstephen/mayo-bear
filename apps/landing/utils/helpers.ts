export const formatCurrency = (amount: number, currency: string) =>  {
   return currencyFormatter(currency).format(amount)
};


const currencyFormatter = (currency: string) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
});