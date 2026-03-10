import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import * as style from "./style.module.css"
import "../../styles/base.css"
import japan from "/src/images/other/japan.png"

const spots = [
  {
    id: 1,
    title: "主催場所01",
    text: "タイトル01",
    date: "2024.08.10",
    top: "70%",
    left: "30%",
  },
  {
    id: 2,
    title: "主催場所02",
    text: "タイトル02",
    date: "2025.01.30",
    top: "60%",
    left: "55%",
  },
]

const Spotmap = () => {
  const [active, setActive] = useState(null)

  return (
    <>
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
            onClick={() => setActive(spot)}
          >
            <span className={style.label}>{spot.title}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className={style.popup}>
          <h3>{active.title}</h3>

          <p>{active.text}</p>
          <p>{active.date}</p>

          <button onClick={() => setActive(null)}>閉じる</button>
        </div>
      )}
    </>
  )
}

export default Spotmap
