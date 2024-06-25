export const formatCurrency = (amount: number, currency: string) =>  {
   return currencyFormatter(currency).format(amount)
};


const currencyFormatter = (currency: string) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
});
export const compactNumberFormatter = (currency: number) => {
    const formatNumber = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(currency);

      return formatNumber
}