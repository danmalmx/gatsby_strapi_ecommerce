export const setCrt = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart

  } catch (error) {
    return [];

  }
}
