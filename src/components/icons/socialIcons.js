import React from 'react'
import styled from 'react-emotion'
import { width, space, height, color } from 'styled-system'
import withProps from 'recompose/withProps'

const Svg = withProps({
  viewBox: '0 0 512 512',
})(styled('svg')`
  vertical-align: text-bottom;
  fill: currentColor;
  color: ${props => props.theme.colorRange[props.colorRange]};
  transition: 0.25s;
  /* &:hover {
    transform: scale(1.25);
  } */
  ${width};
  ${space};
  ${height};
`)

const Icon = ({ size = [30, 100, 150], ...props }) => (
  <Svg mx="auto" width={size} height={size} {...props} />
)

Icon.Linkedin = () => (
  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
)

Icon.Github = () => (
  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
)

Icon.Email = () => (
  <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" />
)

Icon.Codepen = () => (
  <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" />
)

Icon.Twitter = () => (
  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
)

Icon.Dev = () => (
  <>
    <path d="M10.5 2.5C5.6 4.2 2.4 7.8 1 12.9.3 15.6.1 77.2.2 207.1.5 396.6.5 397.5 2.5 401c1.2 1.9 3.6 4.3 5.5 5.5 3.5 2 4.2 2 196 2s192.5 0 196-2c1.9-1.2 4.3-3.6 5.5-5.5 2-3.5 2-4.2 2-196s0-192.5-2-196c-1.2-1.9-3.6-4.3-5.5-5.5-3.5-2-4.4-2-194.5-2.2-162.9-.2-191.6 0-195 1.2zm96.8 124c9 1.9 15.5 5.6 22.2 12.6 6.1 6.4 9.9 13.7 11.5 21.9 1.3 6.9 1.3 81.1 0 88.1-3.4 18.2-18.9 32.4-38.1 34.9-4 .5-17.4 1-29.6 1H51V125h24.8c17.6 0 26.6.4 31.5 1.5zm130.7 13V154h-51v36h31v29h-31l.2 18.2.3 18.3 25.3.3 25.2.2v29h-29.5c-32.8 0-37.9-.6-43.1-5.2-7.3-6.4-6.9-2.3-7.2-72.6-.2-43.8.1-64.5.8-67.3 1.4-5.2 7.3-11.6 12.5-13.4 3.1-1.1 10.9-1.4 35.3-1.5H238v14.5zm48.9-12.3c.4 1.3 6.8 25.6 14.2 54 7.4 28.5 13.6 51.2 13.8 50.5.3-.7 6.6-24.8 14.1-53.7l13.7-52.5 15.6-.3c11.8-.2 15.7.1 15.7 1s-34.6 132.4-36.6 139c-1.4 4.6-8.9 14-13.1 16.5-5.3 3-13.1 3.5-17.9 1-4.3-2.2-10-8.8-12.9-15-1.8-3.8-31.2-112-38-140l-.7-2.7h15.6c15.3 0 15.7 0 16.5 2.2z" />
    <path d="M80 205v51.2l10.3-.4c8.9-.3 10.8-.7 14.8-3 7.8-4.6 7.9-4.9 7.9-48.4 0-42.4 0-42.4-7.3-47.2-3.6-2.4-5.1-2.7-14.9-3.1l-10.8-.3V205z" />
  </>
)

export default ({ social, ...props }) => {
  const Component = Icon[social]
  return (
    <Icon {...props}>
      <Component />
    </Icon>
  )
}
