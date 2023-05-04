import imgIconPointer from "assets/images/icon-pointer.png"
import imgIconPuls from "assets/images/chatting-message_plus.png"
import { useState } from "react"
import Button from "components/common/Button"
import { useNavigate } from "react-router-dom"

const Chatting = () => {
  const navigate = useNavigate()
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <div className="chatting container-maxWidth">
        <div className="chatting-header">
          <div className="chatting-header-location">
            <button type="button" onClick={() => navigate(-1)}>
              <img src={imgIconPointer} alt="뒤로가기" />
            </button>
            <span className="title4-KR">용용</span>
          </div>
          <div className="chatting-header-btns">
            <Button seconbtn1="true">프로필 보기</Button>
            <Button seconbtn2="true" onClick={() => setOpenPopup(true)}>
              거래하기
            </Button>
          </div>
        </div>

        <div className="chatting-main body3">
          <ul>
            <li className="chatting-main-me">
              <span>안녕하세요</span>
            </li>
            <li className="chatting-main-other">
              <span>안녕하세요</span>
            </li>
            <li className="chatting-main-me">
              <span>거래가능하신가요?</span>
            </li>
            <li className="chatting-main-other">
              <span>네 거래버튼 눌러주세요!</span>
            </li>
          </ul>
        </div>
        <div className="chatting-message">
          <a href="#">
            <img src={imgIconPuls} alt="메시지 더보기" />
          </a>
          <input className="body3" type="text" placeholder="메시지를 입력하세요." />
        </div>
      </div>
      {openPopup && (
        <div className="chatting-popup">
          <div className="chatting-popup__wrap">
            <select name="chatting-item" className="chatting-popup__wrap-item body3">
              <option value="item1">에어팟 프로 / 1세대 (5,000원 / 1일)</option>
              <option value="item2">에어팟 프로 / 2세대 (6,000원 / 1일)</option>
              <option value="item3">에어팟 프로 / 3세대 (7,000원 / 1일)</option>
            </select>
            <div className="chatting-popup__btns">
              <Button seconbtn2="true" onClick={() => setOpenPopup(false)}>
                거래 중단
              </Button>
              <Button seconbtn1="true">거래 진행</Button>
            </div>
          </div>
          <button type="button" className="chatting-popup-bg" onClick={() => setOpenPopup(false)} />
        </div>
      )}
    </>
  )
}
export default Chatting
