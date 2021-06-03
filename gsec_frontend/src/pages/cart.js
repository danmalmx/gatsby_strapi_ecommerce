import React, { useState, useCallback } from 'react'
import SEO from '../components/seo'
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Checkout from '../components/Checkout'

import {
  getCart,
  addToCart,
  cartSubTotal,
  cartTotal,
  shouldPayShippign,
  SHIPPING_RATE,
  TAX_RATE
}
  from '../utils/cart';
import { formatPrice } from '../utils/format';

export default () => {
  const cart = getCart();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), [])
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <Layout>

      <SEO title="Cart" />
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <Img
                  fixed={product.thumbnail.childImageSharp.fixed}
                  style={{ width: '100px', height: '100px', verticalAlign: 'middle' }}
                />
                <span style={{ marginLeft: '14px' }}>{product.name}</span>
              </td>
              <td>
                {formatPrice(product.price_in_cent)}
              </td>
              <td style={{ textAlign: 'center' }}>
                <span onClick={() => {
                  addToCart(product, -1)
                  forceUpdate();
                }}>-</span>
                {product.qty}
                <span onClick={() => {
                  addToCart(product, 1)
                  forceUpdate();
                }}>+</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Subtotal: {formatPrice(cartSubTotal(cart))}</h3>
      <h3>VAT: {formatPrice(cartSubTotal(cart) * TAX_RATE)}</h3>
      {shouldPayShippign(cart) &&
        <h3>Shipping: {formatPrice(SHIPPING_RATE)}</h3>
      }
      {!shouldPayShippign(cart) &&
        <h3>Shipping is free</h3>
      }
      <h3>Total: {formatPrice(cartTotal(cart))}</h3>
      <div>
        {cart && cart.length > 0 &&
          <button
            onClick={() => setShowCheckout(true)}
            style={{ fontSize: '24x', padding: '12x 24px' }}
          >
            Initiate Checkout
          </button>}
      </div>
      {showCheckout &&
        <Checkout />
      }
    </Layout>
  )
}
