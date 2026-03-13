import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import * as style from "./style.module.css"
import logo from "/src/images/icon/logo.png"
import FadeIn from "/src/components/FadeIn"

const Component = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const [hoverId, setHoverId] = useState("1")

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <header className={style.header}>
      <div className={style.header_inner}>
        <h1>
          <Link to="/" className={style.logo}>
            <img src={logo} alt="Roots" />
          </Link>
        </h1>

        {/* 二本線ボタン */}
        <button
          className={`${style.hamburger} ${isOpen ? style.open : ""}`}
          onClick={toggleMenu}
          aria-label="メニューを開閉"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* スマホメニュー */}
      <div
        className={`${style.sp_menu} ${isOpen ? style.open : ""}`}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          position: "fixed",
        }}
      >
        <nav className={style.sp_nav}>
          <span className={style.border01}></span>
          <ul className={style.sp_nav_list}>
            <li className={style.sp_nav_item}>
              <Link to="/">ホーム</Link>
            </li>
            <li className={style.sp_nav_item}>
              <Link to="/contact">エントリー</Link>
            </li>
          </ul>
          <span className={style.border02}></span>
        </nav>
      </div>
    </header>
  )
}

export default Component
