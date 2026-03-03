import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as style from "./style.module.css"
import icon from "../../images/icon/home_icon.png"

const Slideshow = ({ images }) => {
  const CustomNextArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background:icon,
          borderRadius: "50%", // 丸い形にする
        }}
        onClick={onClick}
      />
    )
  }
  const CustomPrevArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "var(--color-main)",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />  
    )
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 9000, // ← 動く速さ（大きいほどゆっくり）
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // ← 止まる時間なし
    cssEase: "linear", // ← 一定速度でスーッと動く
    pauseOnHover: false, // ← ホバーしても止まらない
    responsive: [
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className={style.slide_item}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  )
}

export default Slideshow
