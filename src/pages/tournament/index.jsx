import React, { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "@reach/router"
import * as style from "./style.module.css"
import { Link } from "gatsby"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"

import TopPath from "/src/components/TopPath"
import TopVisual from "/src/components/TopVisual"
import Sponsor from "/src/components/Sponsor"

import sample from "/src/images/top/sample.jpg"
import kv from "../../images/tournament/kv.jpg"
import { schedule } from "../../date/scheduleData"

const Tournament = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggle = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }
  const location = useLocation() // 現在のURL

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const index = schedule.findIndex(item => item.id === id)
      if (index !== -1) {
        // アコーディオンを開く
        setActiveIndex(index)

        // スクロール
        const section = document.querySelector(`.${style.scheduleSec}`)
        if (section) {
          const top = section.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top, behavior: "smooth" })
        }
      }
    }
  }, [location.hash])
  const [openIndex, setOpenIndex] = useState(null)

  const result = [
    {
      title: "岐阜大会結果",
      details: "岐阜大会結果の詳細内容がここに入ります。",
      pdfUrl: sample,
    },
    {
      title: "埼玉大会結果",
      details: "埼玉大会結果の詳細内容がここに入ります。",
      pdfUrl: sample,
    },
  ]

  return (
    <Layout>
      <TopVisual entitle="TOURNAMENT" title="大会情報" kv={kv} />
      <TopPath pageTitle="大会情報" />
      <section className={style.scheduleSec}>
        <div className="content">
          <div className={style.titleFlex}>
            <span className={style.border}></span>
            <div className={style.titleBox}>
              <span className={style.en}>schedule</span>
              <h2>日程</h2>
            </div>
          </div>
          <div className={style.accordionOuter}>
            {schedule.map((item, index) => (
              <div
                key={index}
                id={item.id}
                className={`${style.accordion_item} ${
                  activeIndex === index ? style.active : ""
                }`}
              >
                {/* タイトルクリックで toggle */}
                <div className={style.title} onClick={() => toggle(index)}>
                  {item.title}
                </div>

                {/* 内容は active なら開く */}
                <div className={style.activeInner}>
                  <h3>{item.event}</h3>
                  <div className={style.address}>
                    <h4>住所</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.address }}></p>
                  </div>
                  <div className={style.contastBtnBox}>
                    <Link to="/contact">応募はこちら</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={style.resultSec}>
        <div className="content">
          <div className={style.titleFlex}>
            <span className={style.border}></span>
            <div className={style.titleBox}>
              <span className={style.en}>result</span>
              <h2>結果</h2>
            </div>
          </div>
        </div>
        <p className={style.resultText}>
          今回の大会での成果は、次へのステップへの大きな力になります。
          <br />
          結果を確認して、これからの挑戦に役立ててください。
        </p>

        <div className={style.resultPdfFlex}>
          {result.map((t, i) => (
            <button
              key={i}
              className={style.button}
              onClick={() => setOpenIndex(i)} // ボタンで対象モーダルを開く
            >
              {t.title} 詳細を見る
            </button>
          ))}

          {openIndex !== null && (
            <div
              className={style.modalOverlay}
              onClick={() => setOpenIndex(null)} // 背景クリックで閉じる
            >
              <div
                className={style.modalContent}
                onClick={e => e.stopPropagation()} // モーダル内クリックで閉じない
              >
                <h2 className={style.title}>{result[openIndex].title}</h2>
                <p className={style.details}>{result[openIndex].details}</p>
                <a
                  href={result[openIndex].pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.pdfLink}
                >
                  PDFを表示
                </a>
                <button
                  className={style.closeButton}
                  onClick={() => setOpenIndex(null)}
                >
                  閉じる
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Sponsor />
    </Layout>
  )
}

export default Tournament
