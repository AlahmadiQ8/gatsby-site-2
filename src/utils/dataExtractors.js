import get from 'just-safe-get'

export const getPosts = props => {
  return get(props, 'data.allMarkdownRemark.edges').map(({ node }) => ({
    id: node.id,
    title: get(node, 'frontmatter.title'),
    slug: get(node, 'fields.slug'),
    timeToRead: node.timeToRead,
    date: new Date(get(node, 'fields.date')),
  }))
}

export const getSocialLinks = props => {
  return get(props, 'allSocialYaml.edges').map(({ node }) => ({
    name: node.name.charAt(0).toUpperCase() + node.name.slice(1),
    link: node.link,
  }))
}

export const getShortInfo = props => {
  const ymlData = get(props, 'allDataYaml.edges')
  if (!ymlData || ymlData.length === 0) return {}
  return get(ymlData.find(({ node }) => node.shortIntro), 'node.shortIntro')
}
