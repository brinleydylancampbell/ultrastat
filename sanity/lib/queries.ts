export const testimonialsQuery = `
  *[_type == "testimonial" && active == true] | order(order asc) {
    _id, quote, name, role, location
  }
`

export const articlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    title, "slug": slug.current, summary, category, publishedAt
  }
`

export const articleQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    title, "slug": slug.current, summary, category, content, publishedAt
  }
`

export const articleSlugsQuery = `
  *[_type == "article"] { "slug": slug.current }
`

export const squeezePageQuery = `
  *[_type == "squeezePage" && slug.current == $slug][0] {
    "slug": slug.current,
    headline, subheadline, videoSrc,
    benefits,
    testimonial->{ quote, name, role, location },
    formHeading, ctaLabel, metaTitle, metaDescription
  }
`

export const squeezePageSlugsQuery = `
  *[_type == "squeezePage"] { "slug": slug.current }
`

export const distributorsQuery = `
  *[_type == "distributor" && active == true] {
    _id, name, territory, country, lat, lng, contactUrl
  }
`
