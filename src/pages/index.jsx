import React, { useEffect, useRef, useState } from "react"
import Layout from "/src/components/Layout"
import * as style from "./style.module.css"
import { loadInstagramFeed } from "../utils/instafeed"

import "../styles/base.css"
import TopVisual from "/src/components/TopVisual"
import FadeIn from "/src/components/FadeIn"
import Seo from "/src/components/Seo"
import Slideshow from "/src/components/Slideshow"
import ButtomContact from "/src/components/ButtomContact"

import logo from "/src/images/icon/logo.png"
import sample from "/src/images/top/sample.jpg"

import sponsor01 from "/src/images/icon/logo.png"

const Page = ({}) => {
  const images = [sample, sample, sample, sample]

  const sponsor = [
    {
      logo: sponsor01,
      title: "スポンサー名",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名",
      link: "/",
    },
  ]

  useEffect(() => {
    loadInstagramFeed("#instafeed")
  }, [])

  return (
    <Layout>
      <div className={style.topSec}>
        <div className={style.top_visual}>
          <img src={sample} className={style.kv} />
        </div>
        <div className={style.toplogo}>
          <img src={logo} alt="ロゴ" />
        </div>
      </div>

      <div className="content">
        <section className={style.sponsorSec}>
          <h2>SPONSOR</h2>
          <ul className={style.sponsorFlex}>
            {sponsor.map((item, index) => {
              return (
                <FadeIn key={index}>
                  <a href={item.link}>
                    <li>
                      <img src={item.logo} alt={item.title} />
                      <h4>{item.title}</h4>
                    </li>
                  </a>
                </FadeIn>
              )
            })}
          </ul>
        </section>
      </div>

      {/* <section className={style.SlideSec}>
        <div className="content">
          <h2>Slideshow</h2>
          <Slideshow images={images} />
        </div>
      </section> */}

      <section className={style.venueSec}></section>

      <section className={style.instaSec}>
        <h2>INSRAGRAM</h2>
        <div id="instafeed"></div>
      </section>
      <ButtomContact />
    </Layout>
  )
}

export default Page
export const Head = () => <Seo title="TOP" description="TOPページです" />
