import imgSample from "assets/images/sample.png"
import imgIconLike from "assets/images/icon-like.png"
import HeadersSection from "components/headerSection"

import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.css"

const StoreItem = () => {
  return (
    <div className="container-maxWidth storeItem">
      <HeadersSection />
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        <SwiperSlide>
          <img src={imgSample} alt="item-airpot" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSample} alt="item-airpot" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSample} alt="item-airpot" />
        </SwiperSlide>
      </Swiper>
      <div className="storeItem-item-name">
        <div>
          <h4 className="title4-KR">에어팟 프로 / 1세대</h4>
          <span className="small3">내거리 5km</span>
        </div>
        <p className="storeItem-item-name__label small2">인증 회원</p>
      </div>
      <div className="storeItem-item-content">
        <h4 className="heading1-KR">5,000원 / 1일</h4>
        <ul className="small2">
          <li>보증금 5만원</li>
          <li>가격 제안 가능</li>
        </ul>
        <p className="body1">
          실사용 얼마 안되어서 렌탈해요~!
          <br />
          중고로도 판매가 가능하니 문의주세요~
        </p>
      </div>
      <div className="storeItem-menu">
        <div className="storeItem-menu__like">
          <a href="#">
            <img src={imgIconLike} alt="like-btn" />
            <span className="small2">10</span>
          </a>
        </div>
        <button type="button" className="btn-m pry-btn1">
          채팅하기
        </button>
      </div>
    </div>
  )
}

export default StoreItem
