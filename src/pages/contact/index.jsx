import Alert from "@mui/material/Alert"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import * as style from "./style.module.css"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import TopVisual from "/src/components/TopVisual"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import TopPath from "/src/components/TopPath"
import kv from "../../images/top/contact.jpg"

const Page = () => {
  const phoneNumber = "0123456789" 

  const contactList = [
    "商品について", 
    "サービスについて", 
    "その他"
  ] 
  const contactItem = [
    "お名前",
    "メールアドレス",
    "会社名"
  ] 

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" })

  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("success")

  const onSubmit = () => {
    // Netlify Forms は form action で自動送信される
    navigate("/contact/thanks")
  }

  return (
    <Layout>
      <TopVisual entitle="CONTACT" title="お問い合わせ" kv={kv} />
      <TopPath pageTitle="お問い合わせ" />
      <div className={style.container}>
        <div className={"content"}>
          <div className={style.introduction}>
            <p>
              弊社へのお問い合わせは、お電話、もしくは下記のフォームから送信してください。
            </p>
          </div>
          <div className={style.tel}>
            TEL:<a href={`tel:+81${phoneNumber}`}>{phoneNumber}</a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          {alertMessage && (
            <div className={style.alertarea}>
              <Alert severity={alertType} style={{ marginBottom: "50px" }}>
                {alertMessage}
              </Alert>
            </div>
          )}

          <fieldset>
            <legend>ご用件</legend>
            <div className={style.radioarea}>
              {contactList.map((type, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={type}
                    {...register("inquiryType", { required: true })}
                    name="inquiryType"
                  />
                  {type}
                </label>
              ))}
            </div>

            {contactItem.map((term, index) => (
              <div className={style.inputarea} key={index}>
                <label htmlFor={term}>
                  <span>*</span>
                  {term}
                </label>
                <input
                  type="text"
                  id={term}
                  {...register(term, { required: "入力が必須の項目です。" })}
                  name={term}
                />
                <p className={style.error}>
                  {errors[term] && errors[term].message}
                </p>
              </div>
            ))}

            <div className={style.inputarea}>
              <label htmlFor="inquiryDetails">
                <span>*</span>
                お問い合わせ内容
              </label>
              <textarea
                id="inquiryDetails"
                {...register("inquiryDetails", {
                  required: "入力が必須の項目です。",
                })}
                name="inquiryDetails"
              />
              <p className={style.error}>
                {errors.inquiryDetails && errors.inquiryDetails.message}
              </p>
            </div>

            <div className={style.checkboxarea}>
              <div className={style.checkboxarea_txt}>
                当社
                <Link to="/privacy">プライバシーポリシー</Link>
                にご同意頂ける場合は、
                <br />
                「個人情報の取り扱いに同意する」にチェックをお願いいたします。
              </div>

              <label className={style.checkboxarea_check}>
                <input
                  type="checkbox"
                  {...register("agreePrivacyPolicy", { required: true })}
                  name="agreePrivacyPolicy"
                />
                当社の個人情報保護方針に同意する。
              </label>
              <p className={style.error}>
                {errors.agreePrivacyPolicy &&
                  "個人情報保護方針に同意してください。"}
              </p>
            </div>

            <div className={style.buttonarea}>
              <button type="submit" disabled={!isValid}>
                送信
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </Layout>
  )
}

export default Page

export const Head = () => (
  <Seo
    title="お問い合わせ"
    description="お問い合わせページです"
  />
)
