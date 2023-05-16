import { useEffect, useRef } from "react"
import imgNaver from "assets/images/login-naver.png"
import { useLocation } from "react-router-dom"

const NaverLogin = () => {
  const location = useLocation()
  const naverRef = useRef()
  const { naver } = window
  const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_NAVER_CALLBACK_URL } = process.env

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: REACT_APP_NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    })
    naverLogin.init()
  }
  const getNaverToken = () => {
    if (!location.hash) return
    const token = location.hash.split("=")[1].split("&")[0]
  }

  useEffect(() => {
    initializeNaverLogin()
    getNaverToken()
  }, [])
  const handleNaverLogin = () => {
    naverRef.current.children[0].click()
  }
  return (
    <>
      <div ref={naverRef} id="naverIdLogin" style={{ display: "none" }} />
      <div onClick={handleNaverLogin} role="presentation">
        <img src={imgNaver} alt="네이버 로그인" />
      </div>
    </>
  )
}
export default NaverLogin
