import React from 'react'
import SEO from "../components/seo"
import Img from "gatsby-image";
import Layout from '../components/layout';

import { getCart, addToCart } from '../utils/cart'
import { formatPrice } from "../utils/format";

export default () => {
  const cart = getCart();
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
                <span onClick={() => addToCart(product, -1)}>-</span>
                {product.qty}
                <span onClick={() => addToCart(product, 1)}>+</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
