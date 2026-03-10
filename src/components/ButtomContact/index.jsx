import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"
import AnimationText from "/src/components/AnimationText"
import MainButton from "/src/components/MainButton"

const Component = () => {
  return (
    <div className={style.topcontact}>
      <div className={style.topcontact_outer}>
        <span className={style.heading}>
          <AnimationText text="ENTRY" />
        </span>
        <h3>エントリーはこちらから</h3>
        <p>
          ここに文字が入りますここに文字が入りますここに文字が入ります
          <br />
          ここに文字が入りますここに文字が入ります
        </p>
        <div className={style.contentflex}>
          {/* <Link href={`tel:+81 000`}>
            <div className={style.tel}>Tel:00</div>
          </Link> */}
          <MainButton link="/contact" text="ENTRY" />
        </div>
      </div>
    </div>
  )
}

export default Component
