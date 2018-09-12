import React from 'react'
import format from 'date-fns/format'
import Box from './grid/Box'
import Flex from './grid/Flex'
import { Calendar, Clock } from './icons'

const PostMeta = ({ date, timeToRead, ...props }) => (
  <Flex {...props}>
    <Box color="gray" fontSize={[0, null, 1, 2]} mr={4}>
      <Calendar mr="2" />
      <span>{format(new Date(date), 'ddd, MMM D, YYYY')}</span>
    </Box>
    <Box color="gray" fontSize={[0, null, 1, 2]}>
      <Clock mr="2" />
      <span>{timeToRead} min read</span>
    </Box>
  </Flex>
)

export default PostMeta
