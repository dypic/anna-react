import HeadersSection from "components/headerSection"
import NavSection from "components/navSection"
// import imgSample from "assets/images/sample-item.png"
import imgIconLikeOn from "assets/images/icon-like-on.svg"
import imgIconLike from "assets/images/icon-like.svg"
import { useState } from "react"

const Main = () => {
  const logo = "logo"
  const home = "home"
  const [data, setData] = useState([
    {
      title: "에어팟프로/1세대",
      distance: "내거리5km",
      price: "5000",
      date: "1일",
      img: "/public_assets/sample.png",
      like: "true",
    },
    {
      title: "블루투스 스피커",
      distance: "내거리5km",
      price: "15000",
      date: "1개월",
      img: "/public_assets/sample.png",
      like: "false",
    },
    {
      title: "맥북 / 13인치 / 2017년형",
      distance: "내거리5km",
      price: "3000",
      date: "1개월",
      img: "/public_assets/sample.png",
      like: "false",
    },
    {
      title: "무선 마우스",
      distance: "내거리5km",
      price: "15000",
      date: "1개월",
      img: "/public_assets/sample.png",
      like: "false",
    },
    {
      title: "플랜잇 커피머신 / FCM-F9W",
      distance: "내거리5km",
      price: "2000",
      date: "1일",
      img: "/public_assets/sample.png",
      like: "false",
    },
    {
      title: "그란보드 대쉬 전자다트보드",
      distance: "내거리5km",
      price: "15000",
      date: "1일",
      img: "/public_assets/sample.png",
      like: "false",
    },
  ])

  const onClickLike = (idx) => {
    if (data[idx].like === "false") {
      const copy = [...data]
      copy[idx].like = "true"
      setData(copy)
    } else {
      const copy = [...data]
      copy[idx].like = "false"
      setData(copy)
    }
  }

  return (
    <div className="container-maxWidth">
      <HeadersSection locationIcon={logo} />
      <NavSection locationIcon={home} />
      <div className="container-wrap storeList">
        <ul className="storeList-wrap">
          {data.map((item, idx) => {
            return (
              <li className="storeList-inner" key={idx}>
                <a href="#" className="storeList-inner-link">
                  <div className="storeList-img">
                    <img src={item.img} alt="샘플이미지" />
                  </div>
                  <div className="storeList-title">
                    <p className="storeList-title_contents">
                      <span className="title4-KR">{item.title}</span>
                      <small className="small3">{item.distance}</small>
                      <strong className="body2">
                        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 / {item.date}
                      </strong>
                    </p>
                  </div>
                </a>
                <button className="storeList-likeIcon" type="button" onClick={() => onClickLike(idx)}>
                  <img src={item.like === "true" ? imgIconLikeOn : imgIconLike} alt="like" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Main
