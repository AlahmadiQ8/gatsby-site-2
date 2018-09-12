import { css } from 'emotion'

const styles = css`
  p,
  ul {
    font-size: 18px;
    line-height: 1.58;
    color: rgba(0, 0, 0, 0.7);
  }
  @media (min-width: 420px) {
    p,
    ul {
      font-size: 21px;
    }
  }
`

export default styles
