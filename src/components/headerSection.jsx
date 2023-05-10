import imgIconSearch from "assets/images/icon-search.svg"
import imgIconAlarm from "assets/images/icon-alarm.svg"
import imgIconMenu from "assets/images/icon-menu.svg"
import imgIconPointer from "assets/images/icon-pointer.png"
import imgIconClose from "assets/images/icon-close.png"
import { useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const HeadersSection = ({ locationIcon }) => {
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState(false)
  const depth2 = useRef()
  const depth2Toggle = () => {
    depth2.current.classList.toggle("on")
    depth2.current.nextElementSibling.classList.toggle("on")
  }
  return (
    <>
      <header className="header-wrap">
        <div className="header-inner">
          {locationIcon === "logo" ? (
            <Link to="/" href="#" className="home-title heading1-KR">
              안나
            </Link>
          ) : (
            <button type="button" onClick={() => navigate(-1)} className="header-inner-back">
              <img src={imgIconPointer} alt="뒤로가기" />
            </button>
          )}
          <ul className="home-topIcon">
            <li>
              <button type="button">
                <img src={imgIconSearch} alt="검색" />
              </button>
            </li>
            <li>
              <button type="button">
                <img src={imgIconAlarm} alt="알림" />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpenFilter(true)
                  document.querySelector("body").style.overflow = "hidden"
                }}
              >
                <img src={imgIconMenu} alt="메뉴" />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <ul className={`side-filter title4-KR ${openFilter ? "on" : ""}`}>
        <li className="side-filter__close-btn side-filter-item" style={{ padding: "0" }}>
          <button
            type="button"
            onClick={() => {
              setOpenFilter(false)
              document.querySelector("body").style.overflow = "auto"
            }}
          >
            <img src={imgIconClose} alt="닫기" />
          </button>
        </li>
        <li>
          <a href="#" className="side-filter_flex">
            <span>거리</span>
            <span>
              10km 이내
              <img src={imgIconPointer} alt="거리" />
            </span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="side-filter_flex side-filter_depth1 on side-filter-item title4-KR"
            ref={depth2}
            onClick={() => depth2Toggle()}
          >
            <span>카테고리</span>
            <span>
              전체
              <img src={imgIconPointer} alt="카테고리" />
            </span>
          </button>
          <ul className="side-filter-depth2 on">
            <li>
              <a href="#" className="side-filter_flex">
                <span>패션/잡화</span>
                <img src={imgIconPointer} alt="패션/잡화" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>뷰티/건강</span>
                <img src={imgIconPointer} alt="뷰티/건강" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>출산/육아</span>
                <img src={imgIconPointer} alt="출산/육아" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>가전/디지털</span>
                <img src={imgIconPointer} alt="가전/디지털" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>주방용품</span>
                <img src={imgIconPointer} alt="주방용품" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>리빙/인테리어</span>
                <img src={imgIconPointer} alt="리빙/인테리어" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>스포츠/레저/캠핑</span>
                <img src={imgIconPointer} alt="스포츠/레저/캠핑" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>자동차 용품</span>
                <img src={imgIconPointer} alt="자동차 용품" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>도서/음반/DVD</span>
                <img src={imgIconPointer} alt="도서/음반/DVD" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>문구/오피스</span>
                <img src={imgIconPointer} alt="문구/오피스" />
              </a>
            </li>
            <li>
              <a href="#" className="side-filter_flex">
                <span>반려동물 용품</span>
                <img src={imgIconPointer} alt="반려동물 용품" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
export default HeadersSection
