import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.css"
import HomeIcon from "../../images/icon/home_icon.png"
import { useLocation } from "@reach/router";

const Component = ({ pageTitle }) => {

  const location = useLocation();

  return (
    <>
      <div className={style.topicPathWrapper}>
        <Link to="/">
          <img src={HomeIcon} alt="ホームアイコン画像" />
        </Link>
        <span>＞</span>
        <span className={style.link}>
          <a href={location.pathname} target="_blank">
            {pageTitle}
          </a>
        </span>
      </div>
    </>
  )
}

export default Component