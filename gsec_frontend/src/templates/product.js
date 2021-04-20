import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const ProductTemplate = ({ data }) => (
  <Layout>
    <h2>Title</h2>
    <h2>Content</h2>
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
