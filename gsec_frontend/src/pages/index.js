import * as React from "react"
import {graphql} from "gatsby"
import Img from 'gatsby-image'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (

  <Layout>
    <SEO title="Home" />
    {data.allStrapiProduct.nodes.map((product) => (
      <div>
      <Img fixed={product.thumbnail.childImageSharp.fixed} />
      {product.name}
      </div>
    ))}

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
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`