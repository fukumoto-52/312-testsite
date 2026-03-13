import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import Layout from "/src/components/Layout"
import * as style from "./style.module.css"
import { loadInstagramFeed } from "../utils/instafeed"

import "../styles/base.css"
import TopVisual from "/src/components/TopVisual"
import FadeIn from "/src/components/FadeIn"
import ZoomOut from "/src/components/ZoomOut"
import Seo from "/src/components/Seo"
import MainButton02 from "/src/components/MainButton02"
import Slideshow from "/src/components/Slideshow"
import ButtomContact from "/src/components/ButtomContact"
import AnimationText from "/src/components/AnimationText"
import SpotMap from "/src/components/SpotMap"

import kv from "/src/images/movie/movie02.mp4"
import thumbnail from "/src/images/top/thumbnail.jpg"
import logo from "/src/images/icon/logo.png"
import sample from "/src/images/top/sample.jpg"

import sponsor01 from "/src/images/icon/sponsor.png"
import movie01 from "/src/images/movie/movie01.mp4"
import movie02 from "/src/images/movie/movie02.mp4"
import movie03 from "/src/images/movie/movie03.mp4"

import japan from "/src/images/other/japan.png"

const Page = ({}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])
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
          <video loop muted autoPlay poster={thumbnail}>
            <source src={kv} type="video/mp4" />
            お使いのブラウザはvideoタグに対応していません。
          </video>
        </div>
        <div className={style.toptitle}>
          <h2>
            トップタイトル
            <br />
            <span className={style.topmore}>ここに文字が</span>入ります
          </h2>
          {/* <Link to="/" className={style.eventlink}>
            イベント情報 
          </Link> */}
          <MainButton02 link="/" text="イベント情報" />
        </div>
        <div className={style.toplogo}>
          <img src={logo} alt="ロゴ" />
        </div>
      </div>

      <section className={style.sponsorSec}>
        <div className="content">
          <h2 className="decotitke">
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
        <FadeIn>
          <div className={style.movieOuter}>
            <div className={style.movie_titleBox}>
              <p>
                <AnimationText text="MOVIE" />
              </p>
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
        </FadeIn>
      </section>

      <section className={style.spotSec}>
        <div className="content">
          <FadeIn custom={{x : -20 , y : 0}}>
            <div className={style.spottitle}>
              <span>TOURNAMENT VENUES</span>
              <h2>開催実績</h2>
            </div>
          </FadeIn>
          <ZoomOut>
            <SpotMap />
          </ZoomOut>
        </div>
      </section>

      <section
        ref={ref}
        className={`${style.instaSec} ${visible ? style.show : ""}`}
      >
        <div className="content">
          <h2 className="decotitke">
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
