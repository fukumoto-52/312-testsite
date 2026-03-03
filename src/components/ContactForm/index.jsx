import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as style from "./style.module.css";
import Layout from "/src/components/Layout";
import Seo from "/src/components/Seo";
import TopVisual from "/src/components/TopVisual";
import { navigate, Link } from "gatsby";
import TopPath from "/src/components/TopPath";

/* ------------------------------
   フォーム定義（pageContextの代わり）
--------------------------------*/
const contentlist = [
  { title: "お問い合わせ" },
  { title: "資料請求" },
  { title: "採用について" },
];

const term2 = [
  { title: "お名前" },
  { title: "メールアドレス" },
  { title: "電話番号" },
];

/* ------------------------------
   Netlify送信用 encode関数
--------------------------------*/
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      inquiryType: contentlist?.[0]?.title || "",
    },
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  /* ------------------------------
     送信処理（Netlify Forms）
  --------------------------------*/
  const onSubmit = async (formData) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      // GAイベント（あれば）
      if (window.gtag) {
        window.gtag("event", "contact_form_submitted", {
          event_category: "Contact Form",
          event_label: "Submit",
          value: 1,
        });
      }

      navigate("/contact/thanks");
    } catch (error) {
      setAlertMessage("送信に失敗しました。");
      setAlertType("error");
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <TopVisual />
      {/* <TopPath pageTitle="お問い合わせ" /> */}

      <div className={style.container}>
        <div className="content">
          <div className={style.introduction}>
            <p>
              弊社へのお問い合わせは、お電話、もしくは下記のフォームから送信してください。
            </p>
          </div>

          <div className={style.tel}>
            TEL:<a href="tel:+81-000-000-000">000</a>
          </div>
        </div>

        {/* =========================
            Netlify Form
        ========================== */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

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
              {contentlist.map((term, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={term.title}
                    {...register("inquiryType", { required: true })}
                  />
                  {term.title}
                </label>
              ))}
            </div>

            {term2.map((term, index) => (
              <div className={style.inputarea} key={index}>
                <label>
                  <span>*</span>
                  {term.title}
                </label>

                <input
                  type="text"
                  {...register(term.title, {
                    required: "入力が必須の項目です。",
                  })}
                />

                <p className={style.error}>{errors[term.title]?.message}</p>
              </div>
            ))}

            <div className={style.inputarea}>
              <label>
                <span>*</span>
                お問い合わせ内容
              </label>

              <textarea
                {...register("inquiryDetails", {
                  required: "入力が必須の項目です。",
                })}
              />

              <p className={style.error}>{errors.inquiryDetails?.message}</p>
            </div>

            <div className={style.checkboxarea}>
              <div className={style.checkboxarea_txt}>
                当社
                <Link to="/">プライバシーポリシー</Link>
                にご同意頂ける場合は、
                <br />
                「個人情報の取り扱いに同意する」にチェックをお願いいたします。
              </div>

              <label className={style.checkboxarea_check}>
                <input
                  type="checkbox"
                  {...register("agreePrivacyPolicy", {
                    required: true,
                  })}
                />
                当社の個人情報保護方針に同意する。
              </label>

              <p className={style.error}>
                {errors.agreePrivacyPolicy &&
                  "個人情報保護方針に同意してください。"}
              </p>
            </div>

            <div className={style.buttonarea}>
              {/* <button type="submit" disabled={!isValid}>
                送信
              </button> */}
              <button
                className={style.button}
                type="submit"
                disabled={!isValid} 
              >
                送信
              </button>
            </div>
          </fieldset>
        </form>

        {/* Netlify検出用（Gatsby安全策） */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
        </form>
      </div>
    </Layout>
  );
};

export default Page;

export const Head = () => {
  return <Seo pageTitle="お問い合わせ" />;
};
