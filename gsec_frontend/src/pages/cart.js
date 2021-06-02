import React from 'react'
import SEO from "../components/seo"
import Img from "gatsby-image";
import Layout from '../components/layout';

import { getCart } from '../utils/cart'
import { formatPrice } from "../utils/format";

export default () => {
  const cart = getCart();
  return (
    <Layout>

      <SEO title="Cart" />
      <div>
        {cart.map(product => (
          <div>
            <Img fixed={product.thumbnail.childImageSharp.fixed} />
            <h3>{product.name}</h3>
            <p>{formatPrice(product.price_in_cent)}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
