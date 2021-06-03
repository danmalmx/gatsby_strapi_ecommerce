const TAX_RATE = process.env.TAX_RATE || 0.1;
const FREE_SHIPPING_THRESHOLD = process.env.FREE_SHIPPING_THRESHOLD || 10000;
const SHIPPING_RATE = process.env.SHIPPING_RATE || 500;

const cartSubTotal = (cart) => {
  const subTotal = cart.reduce((counter, product) => {
    return counter + product.price_in_cent * product.qty
  }, 0);

  return subTotal
}

const shouldPayShippign = (cart) => {
  const subTotal = cartSubTotal(cart);

  return subTotal < FREE_SHIPPING_THRESHOLD;
}

const cartTotal = (cart) => {
  const subTotal = cartSubTotal(cart);
  const shipping = shouldPayShippign(cart) ? SHIPPING_RATE : 0;
  const total = subTotal + subTotal * TAX_RATE + shipping;

  return Math.round(total);
}

module.exports = {
  cartSubTotal,
  shouldPayShippign,
  cartTotal,
}
