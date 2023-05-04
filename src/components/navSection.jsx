import imgIconHomeOn from "assets/images/icon-gnb-b01.svg"
import imgIconGetOn from "assets/images/icon-gnb-b02.svg"
import imgIconTownOn from "assets/images/icon-gnb-b03.svg"
import imgIconOwnOn from "assets/images/icon-gnb-b04.svg"

import imgIconHome from "assets/images/icon-gnb-w01.svg"
import imgIconGet from "assets/images/icon-gnb-w02.svg"
import imgIconAdd from "assets/images/icon-gnb-add.svg"
import imgIconTown from "assets/images/icon-gnb-w03.svg"
import imgIconOwn from "assets/images/icon-gnb-w04.svg"
import { Link } from "react-router-dom"

const NavSection = ({ locationIcon }) => {
  return (
    <nav className=" nav-wrap">
      <ul className="nav-list">
        <li className="active">
          <Link to="/">
            <img src={locationIcon === "home" ? imgIconHomeOn : imgIconHome} alt="홈홈" />
            <span className="small2">홈</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <img src={imgIconGet} alt="구해요" />
            <span className="small2">구해요</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imgIconAdd} alt="추가" />
            <span className="small2">추가</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imgIconTown} alt="동네정보" />
            <span className="small2">동네정보</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={imgIconTown} alt="마이페이지" />
            <span className="small2">마이페이지</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavSection
