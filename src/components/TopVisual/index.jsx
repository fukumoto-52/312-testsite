import React from "react";
import * as style from "./style.module.css";
import ZoomOut from "/src/components/ZoomOut";
import img01 from "/src/images/top/img01.jpg";
import img02 from "/src/images/top/img02.jpg";

const Component = ({ kv , title , entitle}) => {
  return (
    <div className={style.topvisual}>
        <img className={style.tvimg01} src={kv} alt="" />
        <span>{entitle}</span>
        <h2>{title}</h2>
    </div>
  );
};

export default Component;
