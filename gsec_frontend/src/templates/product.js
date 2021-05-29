import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { formatPrice } from '../utils/format'

const ProductTemplate = ({ data }) => (
  <Layout>
    <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />
    <h2>{data.strapiProduct.name}</h2>
    <p>{data.strapiProduct.description}</p>
    <p>Price: {formatPrice(data.strapiProduct.price_in_cent)}</p>

    {console.log("ProductTemplate.render data", data)}
  </Layout>

)

export default ProductTemplate

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
      strapiProduct(id: {eq: $id}) {
        name
        price_in_cent
        description
        thumbnail {
          childImageSharp {
            fixed(width: 640) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
`
