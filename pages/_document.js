import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html >
      <Script src="/path/to/highlight.min.js"></Script>
      <Script>hljs.highlightAll();</Script>
      <Head />
      <body className="bg-grey-800 text-yellow-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}