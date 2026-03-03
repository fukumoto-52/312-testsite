

import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"

const Component = ({ link, text }) => {
  const isExternal = /^https?:\/\//.test(link)

  const commonContent = (
    <>
      <svg>
        <rect x="2" y="2" rx="0" fill="none" width="240" height="50" />
      </svg>
      <span>{text}</span>
    </>
  )

  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.container} ${style.btnSvg}`}
    >
      {commonContent}
    </a>
  ) : (
    <Link to={link} className={`${style.container} ${style.btnSvg}`}>
      {commonContent}
    </Link>
  )
}

export default Component
