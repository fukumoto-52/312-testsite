import React, { useState, useEffect, useCallback } from 'react';
import * as style from "./style.module.css";
import page_top from "../../images/icon/page_top.png";

const PageTop = ({ showBelow }) => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showBelow]);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showBelow, handleScroll]);

  return (
    <div className={`${style.page_top} ${show ? style.show : ''} is-pc`}>
      <button 
        onClick={handleClick} 
        id="scrollBtn" 
        className={style.scrollBtn} 
        aria-label="to top"
      >
        <img src={page_top} alt="pagetop" />
      </button>
    </div>
  );
};

export default PageTop;
