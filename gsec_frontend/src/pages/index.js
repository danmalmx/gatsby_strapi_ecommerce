import * as React from "react"
import {graphql} from "gatsby"
import Img from 'gatsby-image'


import Layout from "../components/layout"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'

const IndexPage = ( {data} ) => (

  <Layout>
    <SEO title="Home" />
    <h2>Shop</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      rowGap: '20,'

    }}>
      {data.allStrapiProduct.nodes.map((product) => (
        <div style={{marginBottom: 20}}>
          <div>
            <Img fixed={product.thumbnail.childImageSharp.fixed} />
          </div>
          <div>
            <h3 style={{marginBottom: 0}}>{product.name}</h3>
            {formatPrice(product.price_in_cent)}
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiProduct {
      nodes {
        id
        description
        created_at
        name
        price_in_cent
        strapiId,
        thumbnail {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`