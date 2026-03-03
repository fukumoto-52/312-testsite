import React, { useEffect, useRef, useState } from "react"
import Layout from "/src/components/Layout"
import * as style from "./style.module.css"
import "../styles/base.css"
import TopVisual from "/src/components/TopVisual"
import FadeIn from "/src/components/FadeIn"
import Seo from "/src/components/Seo"
import Slideshow from "/src/components/Slideshow"
import ButtomContact from "/src/components/ButtomContact"
import sample from "/src/images/top/sample.jpg"

const Page = ({}) => {
    const images = [
      sample,
      sample,
      sample,
      sample,
    ];
  return (
    <Layout>
      <div className={style.topSec}>
        <div className={style.top_visual}>
          <img src={sample} className={style.kv} />
        </div>
      </div>

      <section className={style.SlideSec}>
        <div className={"content"}>
          <h2>Slideshow</h2>
          <Slideshow images={images} />
        </div>
      </section>
      <ButtomContact />
    </Layout>
  )
}

export default Page
export const Head = () => (
  <Seo
    title="TOP"
    description="TOPページです"
  />
)
