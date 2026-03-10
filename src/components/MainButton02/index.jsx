import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"

const Component = ({ link, text }) => {
  return (
    <a href={link} className={`${style.btn} ${style.btnFlat}`}>
      <span>{text}</span>
    </a>
  )
}

export default Component
