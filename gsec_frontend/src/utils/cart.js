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

    cart[indexOfProduct].qty += qty;

    if (cart[indexOfProduct].qty === 0) {
      cart.splice(indexOfProduct, 1)
    }
  } else {
    product.qty = qty;

    cart.push(product);

  }

  setCart(cart)
}

export const updateProductQuantity = (product, quantity) => {
  const cart = getCart();

  const indexOfProduct = cart.findIndex((alreadyInCart) =>
    alreadyInCart.strapiId === product.strapiId);

  if (indexOfProduct) {

  }
}
