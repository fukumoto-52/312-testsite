import { Link } from "gatsby"
import React from "react"
import * as style from "./style.module.css"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"

const Page = () => {
  return (
    <Layout>
      <div className={style.notfound_container}>
        <h1>404 Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
        <Link className={style.top_page_link} to="/">
          トップページへ
        </Link>
      </div>
    </Layout>
  )
}

export default Page

export const Head = () => <Seo />
