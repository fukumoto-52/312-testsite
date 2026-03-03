import React from "react";
import * as style from "./style.module.css";
import ZoomOut from "/src/components/ZoomOut";
import img01 from "/src/images/top/img01.jpg";
import img02 from "/src/images/top/img02.jpg";

const Component = ({ kv }) => {
  return (
    <div className={style.topvisual}>
      <div className={style.tvImgBox}>
        <img className={style.tvimg01} src={img01} alt="" />
        <img className={style.tvimg02} src={img02} alt="" />
      </div>
        <h2>VISUAL</h2>
    </div>
  );
};

export default Component;
