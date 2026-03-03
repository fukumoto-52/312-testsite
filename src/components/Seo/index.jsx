import * as React from "react"
import StructuredMarkup from "/src/components/StructuredMarkup"

const Seo = ({ title, description, keywords, ogImage, children }) => {
  const defaultTitle = "サイトタイトル"
  const defaultDescription = "サイトの説明文をここに入れる"

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const metaDescription = description || defaultDescription

  return (
    <>
      <title>{pageTitle}</title>

      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {children}

      {/* 固定JSON-LD例 */}
      <StructuredMarkup
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: defaultTitle,
          description: defaultDescription,
          url: "https://example.com",
        }}
      />
    </>
  )
}

export default Seo