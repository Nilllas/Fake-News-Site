import React from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {

    return (
        <Layout>

          <article className="sheet">
            <div className="sheet__inner">
              <h1 className="sheet__title">{data.markdownRemark.fields.title}</h1>
              <p className="sheet__lead">{data.markdownRemark.excerpt}</p>
              <div
                className="sheet__body"
                dangerouslySetInnerHTML={{
                  __html: data.markdownRemark.html,
                }}
              />

            </div>
          </article>

        </Layout>
  )
}


export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
          fields {
            slug
            title
          }
          html
          id
          excerpt
        }
    }


`


{/*
export const query = graphql`
    datoCmsWork(slug: { eq: $slug }) {
      query WorkQuery($slug: String!) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      description
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }



      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
*/}
