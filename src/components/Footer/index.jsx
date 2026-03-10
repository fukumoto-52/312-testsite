import { Link } from "gatsby"
import React from "react"
import PageTop from "/src/components/PageTop"
import * as style from "./style.module.css"
import "../../styles/base.css"
import logo from "/src/images/icon/logo.png"

const Component = () => {
  return (
    <>
      <PageTop showBelow={900} />
      <footer className={style.footer}>
        <div className={"content"}>
          <div className={style.footerTop}>
            <Link to="/" className={style.footer_logo}>
              <img src={logo} alt="ロゴ" />
            </Link>
            <nav className={style.nav}>
              <ul className={style.nav_list}>
                <li className={style.nav_item}>
                  <Link to="/">HOME</Link>
                </li>
                <li className={style.nav_item}>
                  <Link to="/">TEXT</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <Link
              className={style.privacy_policy_link}
              to="/"
            >
              プライバシーポリシー
            </Link>
          </div>
          <small className={style.copyright}>&copy;株式会社〇〇</small>
        </div>
      </footer>
    </>
  )
}

export default Component
