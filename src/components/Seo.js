import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, lang, meta }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "og:title",
          content: data.site.siteMetadata.title,
        },
        {
          name: "og:description",
          content: metaDescription,
        },
        {
          name: "og:site_name",
          content: data.site.siteMetadata.title,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "author",
          content: data.site.siteMetadata.author,
        },
        {
          name: "keywords",
          content: data.site.siteMetadata.keywords,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: "es",
  meta: [],
  description: "",
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo
