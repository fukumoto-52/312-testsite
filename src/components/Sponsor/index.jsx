import React from "react"
import * as style from "./style.module.css"
import AnimationText from "/src/components/AnimationText"
import FadeIn from "/src/components/FadeIn"

import icon from "../../images/icon/home_icon.png"
import sponsor01 from "/src/images/icon/sponsor.png"

const sponsor = [
    {
      logo: sponsor01,
      title: "スポンサー名1",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名2",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名3",
      link: "/",
    },
    {
      logo: sponsor01,
      title: "スポンサー名4",
      link: "/",
    },
  ]
const Sponsor = ({  }) => {


  return (
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
  )
}

export default Sponsor
