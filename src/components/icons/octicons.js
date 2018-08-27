import React from 'react'
import styled from 'react-emotion'
import { space, height, color } from 'styled-system'
import withProps from 'recompose/withProps'

const Svg = withProps({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 14 16',
})(styled('svg')`
  display: inline-block;
  vertical-align: text-bottom;
  fill: currentColor;
  ${color};
  ${space};
  ${height};
`)

const Icon = ({ size = '16', ...props }) => <Svg height={size} {...props} />

export const Calendar = props => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"
    />
  </Icon>
)

export const Clock = props => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      d="M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"
    />
  </Icon>
)

export const Post = props => (
  <Icon {...props}>
    <path
      d="M3 4H7V6H3zM3 7H7V9H3zM3 11H6V13H3zM9.30452675 13L7 13 7 9.68599834 11.5744856 3 14 6.41342171 9.30452675 13zM8.15226337 11.3429992L8.83209877 11.3429992 12.3522634 6.37199669 11.6090535 5.33637117 8.15226337 10.3653687 8.15226337 11.3429992z"
      transform="translate(-259.000000, -1866.000000) translate(110.000000, 1468.000000) translate(149.000000, 398.000000)"
    />
    <path
      d="M9 13L8 13 8 14 1 14 1 2 8 2 8 9 10 7 10 0 0 0 0 16 10 16 10 11z"
      transform="translate(-259.000000, -1866.000000) translate(110.000000, 1468.000000) translate(149.000000, 398.000000)"
    />
  </Icon>
)
