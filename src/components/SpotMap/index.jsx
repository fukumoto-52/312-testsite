import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import * as style from "./style.module.css"
import "../../styles/base.css"
import japan from "/src/images/other/japan.png"

const spots = [
  {
    id: 1,
    title: "北海道開催",
    text: "ポップアップ内容01",
    date: "2024.08.10",
    top: "18%",
    left: "75%",
  },
  {
    id: 2,
    title: "東京開催",
    text: "ポップアップ内容02",
    date: "2025.01.30",
    top: "69%",
    left: "55%",
  },
  {
    id: 3,
    title: "大阪開催",
    text: "ポップアップ内容02",
    date: "2025.01.30",
    top: "72%",
    left: "35%",
  },
]

const Spotmap = () => {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)

  const changeSpot = spot => {
    // popup出てない場合
    if (!open) {
      setActive(spot)
      setOpen(true)
      return
    }

    // 一回閉じる
    setOpen(false)

    // アニメーション待つ
    setTimeout(() => {
      setActive(spot)
      setOpen(true)
    }, 300)
  }
  return (
    <div className={style.mapWrap}>
      <div className={style.map}>
        <img src={japan} alt="" />

        {spots.map(spot => (
          <button
            key={spot.id}
            className={style.pin}
            style={{
              top: spot.top,
              left: spot.left,
            }}
            onClick={() => changeSpot(spot)}
          >
            <span className={style.label}>{spot.title}</span>
          </button>
        ))}
      </div>
      <div className={style.sp_list}>
        <img src={japan} alt="" />
        {spots.map(spot => (
          <button
            key={spot.id}
            className={style.sp_item}
            onClick={() => changeSpot(spot)}
          >
            <span className={style.sp_title}>{spot.title}</span>
            <span className={style.sp_date}>{spot.date}</span>
          </button>
        ))}
      </div>
      <div className={`${style.popup} ${open ? style.open : ""}`}>
        {active && (
          <>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <p>{active.date}</p>

            <button onClick={() => setOpen(false)}>閉じる</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Spotmap
