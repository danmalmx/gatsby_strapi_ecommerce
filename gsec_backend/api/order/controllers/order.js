'use strict';

const stripe = require('stripe')('sk_test_51Ixw88AGzBGboXkXtoELclMRKfpZX8kfjZJNISl2oi48qD0puZ2V7ciKkJEy5mDjSidld5oGbxRYJtnXmAlxYpZY00r2fYWrlg');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  setUpStripe: async (ctx) => {
    let total = 100;
    let validadedCart = []
    let receiptCart = [];

    const { cart } = ctx.request.body;

    await Promise.all(cart.map(async product => {
      const validatedProduct = await strapi.services.product.findOne({
        id: product.id
      });

      console.log('validatedProduct', validatedProduct);

      if (validatedProduct) {
        validadedCart.push(validatedProduct);
        validatedProduct.qty = product.qty;

        receiptCart.push({
          id: product.id,
          qty: product.qty
        })
      }


      return validatedProduct
    }));
    console.log('validadedCart', validadedCart)

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'eur',
        // Verify your integration in this guide by including this parameter
        metadata: { cart: JSON.stringify(receiptCart) },
      });

      return paymentIntent;

    } catch (error) {
      return { error: error.raw.message }
    }
  }
};
