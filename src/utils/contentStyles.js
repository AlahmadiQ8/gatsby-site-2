import { css } from 'emotion'

const styles = css`
  blockquote,
  p,
  ul,
  h1,
  h2,
  h3 {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 1.75rem;
  }
  p,
  ul {
    font-size: 18px;
    line-height: 1.58;
    color: rgba(0, 0, 0, 0.7);
  }
  li p {
    margin: 0;
  }
  blockquote {
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }
  .instagram-media {
    margin: 0 auto 30px !important;
    max-width: 550px !important;
  }
  @media (min-width: 420px) {
    blockquote,
    p,
    ul,
    h1,
    h2,
    h3,
    .instagram-media {
      margin-bottom: 38px;
    }
    p,
    ul {
      font-size: 21px;
    }
  }
`

export default styles
