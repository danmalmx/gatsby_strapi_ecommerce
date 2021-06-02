
export const TAX_RATE = process.env.TAX_RATE || 0.1


export const setCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('cart', typeof cart);
    return cart ? cart : [];

  } catch (error) {
    return [];

  }
}

export const addToCart = (product, qty = 1) => {
  const cart = getCart();

  const indexOfProduct = cart.findIndex((alreadyInCart) =>
    alreadyInCart.strapiId === product.strapiId);

  if (indexOfProduct !== -1) {

    cart[indexOfProduct].qty += parseInt(qty);

    if (cart[indexOfProduct].qty <= 0) {
      cart.splice(indexOfProduct, 1)
    }
  } else {
    product.qty = parseInt(qty);

    cart.push(product);

  }

  setCart(cart)
}

export const cartSubTotal = (cart) => {
  const subTotal = cart.reduce((counter, product) => {
    return counter + product.price_in_cent * product.qty
  }, 0);

  return subTotal
}

export const cartTotal = (cart) => {
  const subTotal = cartSubTotal(cart);
  const total = subTotal + subTotal * TAX_RATE;

  return Math.round(total);
}
