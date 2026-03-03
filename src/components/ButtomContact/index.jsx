import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"


const Component = () => {

  return (
    <div className={style.container}>
      <h3 className={style.heading}>CONTACT</h3>
      <p>
        <span>ご不明点がございましたら、</span>
        <span>お気軽にお問い合わせください。</span>
      </p>
      <div className={style.contentflex}>
        <Link href={`tel:+81 000`}>
          <div className={style.tel}>
              Tel:00
          </div>
        </Link>

        <Link className={style.button} to="/contact">
          お問い合わせはこちら
        </Link>

      </div>
    </div>
  )
}

export default Component
