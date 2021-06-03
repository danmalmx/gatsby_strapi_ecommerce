'use strict';

const stripe = require('stripe')('sk_test_51Ixw88AGzBGboXkXtoELclMRKfpZX8kfjZJNISl2oi48qD0puZ2V7ciKkJEy5mDjSidld5oGbxRYJtnXmAlxYpZY00r2fYWrlg');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  setUpStripe: async (ctx) => {
    let total = 0;
    let cart = []

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'eur',
        // Verify your integration in this guide by including this parameter
        metadata: { cart: JSON.stringify(cart) },
      });

      return paymentIntent;

    } catch (error) {
      return { error: error.raw.message }
    }
  }
};
