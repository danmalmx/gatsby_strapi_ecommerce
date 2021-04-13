import * as React from "react"
import {graphql} from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (

  <Layout>
    <SEO title="Home" />
    {data.allStrapiProduct.nodes.map((product) => (
      <div>
      {product.name}
        <StaticImage src={product.thumbnail.childImageSharp.fixed} />
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
            gatsbyImageData(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`