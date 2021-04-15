/**
 * Formats an integer price with decimals witha preceding € sign
 * @params {string - proceWithDevimal representation of price}
 */
export const formatPrice = (priceWithDecimal) => {
    const realPrice = parseInt(priceWithDecimal) / 100;
    return realPrice.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'EUR'
    });
};