import { useEffect, useRef } from "react"
import imgNaver from "assets/images/login-naver.png"

const NaverLogin = () => {
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

  useEffect(() => {
    initializeNaverLogin()
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
