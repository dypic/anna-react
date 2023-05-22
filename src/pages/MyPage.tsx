import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import imgIconPointer from "assets/images/icon-pointer.svg"
import imgSampleProfile from "assets/images/sample-profile.png"
import { Link } from "react-router-dom"
import React from "react"

const MyPage: React.FC = () => {
  return (
    <div className="container-maxWidth">
      <HeadersSection />
      <NavSection />
      <div className="container-wrap myPage">
        <ul>
          <li>
            <Link to="/login">
              <span className="title2">
                <img src={imgSampleProfile} alt="프로필" />
                로그인이 필요합니다
              </span>
              <img src={imgIconPointer} alt="프로필 이동" />
            </Link>
          </li>
          <li>
            <Link to="/chatting/:id">
              <span className="title4-KR">채팅</span>
              <img src={imgIconPointer} alt="채팅" />
            </Link>
          </li>
          <li>
            <a href="#">
              <span className="title4-KR">거래 관리</span>
              <img src={imgIconPointer} alt="거래 관리" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title4-KR">내가 쓴 글 관리</span>
              <img src={imgIconPointer} alt="내가 쓴 글 관리" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="title4-KR">환경설정</span>
              <img src={imgIconPointer} alt="환경설정" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MyPage
