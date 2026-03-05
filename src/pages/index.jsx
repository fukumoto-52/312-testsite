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
import AnimationText from "/src/components/AnimationText"
import kv from "/src/images/movie/movie02.mp4"
import logo from "/src/images/icon/logo.png"
import sample from "/src/images/top/sample.jpg"

import sponsor01 from "/src/images/icon/logo.png"
import movie01 from "/src/images/movie/movie01.mp4"
import movie02 from "/src/images/movie/movie02.mp4"
import movie03 from "/src/images/movie/movie03.mp4"

import japan from "/src/images/other/japan.png"
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
  const movies = [movie01, movie02, movie03]

  useEffect(() => {
    loadInstagramFeed("#instafeed")
  }, [])

  return (
    <Layout>
      <div className={style.topSec}>
        <div className={style.top_visual}>
          {/* <img src={sample} className={style.kv} /> */}
          <video controls>
            <source src={kv} type="video/mp4" />
            お使いのブラウザはvideoタグに対応していません。
          </video>
        </div>
        <div className={style.toplogo}>
          <img src={logo} alt="ロゴ" />
        </div>
      </div>

      <section className={style.sponsorSec}>
        <div className="content">
          <h2>
            <AnimationText text="SPONSOR" />
          </h2>
          <ul className={style.sponsorFlex}>
            {sponsor.map((item, index) => {
              return (
                <FadeIn custom={{ delay: 0.3 * index, skewX: -10 }}>
                  <li>
                    <a href={item.link}>
                      <img src={item.logo} alt={item.title} />
                      <h4>{item.title}</h4>
                    </a>
                  </li>
                </FadeIn>
              )
            })}
          </ul>
        </div>
      </section>

      {/* <section className={style.SlideSec}>
        <div className="content">
          <h2>Slideshow</h2>
          <Slideshow images={images} />
        </div>
      </section> */}

      <section className={style.movieSec}>
        <div className={style.movieOuter}>
          <div className={style.movie_titleBox}>
            <span>
              <AnimationText text="MOVIE" />
            </span>
            <h2>試合動画</h2>
          </div>
          <ul className={style.movie_list}>
            {movies.map((movie, index) => {
              return (
                <li key={index}>
                  <video controls>
                    <source src={movie} type="video/mp4" />
                    お使いのブラウザはvideoタグに対応していません。
                  </video>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className={style.venueSec}>
        <div className={style.venueOuter}>
          <img src={japan} alt="日本地図" />
        </div>
      </section>

      <section className={style.instaSec}>
        <div className="content">
          <h2>
            <AnimationText text="INSTAGRAM" />
          </h2>
          <div id="instafeed"></div>
        </div>
      </section>
      <ButtomContact />
    </Layout>
  )
}

export default Page
export const Head = () => <Seo title="TOP" description="TOPページです" />
