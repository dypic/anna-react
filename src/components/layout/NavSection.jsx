import imgIconHomeOn from "assets/images/icon-gnb-b01.svg"
import imgIconGetOn from "assets/images/icon-gnb-b02.svg"
import imgIconTownOn from "assets/images/icon-gnb-b03.svg"
import imgIconOwnOn from "assets/images/icon-gnb-b04.svg"

import imgIconHome from "assets/images/icon-gnb-w01.svg"
import imgIconGet from "assets/images/icon-gnb-w02.svg"
import imgIconAdd from "assets/images/icon-gnb-add.svg"
import imgIconTown from "assets/images/icon-gnb-w03.svg"
import imgIconOwn from "assets/images/icon-gnb-w04.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"

const NavSection = () => {
  const location = useLocation()
  const locationIcon = location.pathname
  const navigate = useNavigate()
  return (
    <div className="nav">
      <nav className=" nav-wrap">
        <ul className="nav-list">
          <li className={locationIcon === "/" ? "active" : ""}>
            <Link to="/">
              <img src={locationIcon === "/" ? imgIconHomeOn : imgIconHome} alt="홈홈" />
              <span className="small2">홈</span>
            </Link>
          </li>
          <li className={locationIcon === "/getItem" ? "active" : ""}>
            <Link to="/getItem">
              <img src={locationIcon === "/getItem" ? imgIconGetOn : imgIconGet} alt="구해요" />
              <span className="small2">구해요</span>
            </Link>
          </li>
          <li className={locationIcon === "/townInfo" ? "active" : ""}>
            <Link to="/townInfo">
              <img src={locationIcon === "/townInfo" ? imgIconTownOn : imgIconTown} alt="동네정보" />
              <span className="small2">동네정보</span>
            </Link>
          </li>
          <li className={locationIcon === "/myPage" ? "active" : ""}>
            <Link to="/myPage">
              <img src={locationIcon === "/myPage" ? imgIconOwnOn : imgIconOwn} alt="마이페이지" />
              <span className="small2">마이페이지</span>
            </Link>
          </li>
        </ul>
      </nav>
      {locationIcon !== "/myPage" && (
        <button type="button" className="nav-write-btn" onClick={() => locationIcon === "/" && navigate("/addItem")}>
          글쓰기
        </button>
      )}
    </div>
  )
}

export default NavSection
