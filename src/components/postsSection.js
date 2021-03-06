import React from 'react'
import PropTypes from 'prop-types'
import { HeaderLink } from './links'
import Grid from './grid/Grid'
import Box from './grid/Box'
import PostMeta from './postMeta'

const H1 = Box.withComponent('h1')
const H2 = Box.withComponent('h2')

const PostsSection = ({ posts, containerStyles, title = 'Posts' }) => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateColumns={['100%', null, '650px']}
    gridTemplateRows="repeat(auto-fit, 1fr)"
    justifyContent="center"
    gridRowGap={['15px', '20px', null, '30px']}
    {...containerStyles}
  >
    <H1
      mt="0"
      mb={['0', null, null, '40px']}
      pb={[3]}
      fontSize={[5, null, 6, 7]}
      textAlign="center"
      borderColor="primaryVariant"
      borderBottom="2px solid"
    >
      {title}
    </H1>
    {posts.map(post => (
      <Grid
        key={post.id}
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr"
        gridRowGap="10px"
      >
        <H2 fontSize={[3, null, 4, 5]} my="0">
          <HeaderLink to={post.slug}>{post.title}</HeaderLink>
        </H2>
        <PostMeta date={post.date} timeToRead={post.timeToRead} />
      </Grid>
    ))}
  </Grid>
)

PostsSection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date),
      timeToRead: PropTypes.string.isRequired,
    })
  ),
  containerStyles: PropTypes.object,
}

PostsSection.defaultProps = {
  posts: [],
  containerStyles: {},
}

export default PostsSection
