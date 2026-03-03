import React from "react"
import Layout from "/src/components/Layout"
import * as style from "./style.module.css"
import MainButton from "/src/components/MainButton"

const ThanksPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h1>送信完了</h1>
        <p>
          お問い合わせ頂きましてありがとうございました。
          <br />
          追って担当よりご連絡申し上げます。
        </p>

        <div className={style.button}>
          <MainButton link="/" text="トップページへ"/>
        </div>
      </div>
    </Layout>
  )
}

export default ThanksPage
