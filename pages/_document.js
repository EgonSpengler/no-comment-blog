import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html >
      <script src="/path/to/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      <Head />
      <body className="bg-grey-800 text-yellow-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}