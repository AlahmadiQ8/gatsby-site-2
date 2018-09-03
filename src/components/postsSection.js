import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import { HeaderLink } from './links'
import Grid from './grid/Grid'
import Box from './grid/Box'
import Flex from './grid/Flex'
import { Calendar, Clock } from './icons'

const H1 = Box.withComponent('h1')
const H2 = Box.withComponent('h2')

const PostsSection = ({ posts, containerStyles }) => (
  <Grid
    px={[3, 4, 5, 6]}
    py={[4, 4, 5, 6]}
    bg="darkBg"
    color="lightText"
    gridTemplateColumns={['100%', null, '650px']}
    gridTemplateRows="repeat(auto-fit, 1fr)"
    justifyContent="center"
    gridRowGap={['60px']}
    {...containerStyles}
  >
    <H1
      mb={['0', null, null, '30px']}
      pb={[3]}
      fontSize={[5, null, 6, 7]}
      textAlign="center"
      borderColor="primaryVariant"
      borderBottom="2px solid"
    >
      Posts
    </H1>
    {posts.map(post => (
      <Grid
        key={post.id}
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr"
        gridRowGap="20px"
      >
        <H2 fontSize={[3, null, 4, 5]} mb="0">
          <HeaderLink to={post.slug}>{post.title}</HeaderLink>
        </H2>
        <Flex>
          <Box color="gray" fontSize={[0, null, 1, 2]} mr={4}>
            <Calendar mr="2" />
            <span>{format(new Date(post.date), 'ddd, MMM D, YYYY')}</span>
          </Box>
          <Box color="gray" fontSize={[0, null, 1, 2]}>
            <Clock mr="2" />
            <span>{post.timeToRead} min read</span>
          </Box>
        </Flex>
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
