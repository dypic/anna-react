import { useEffect, useRef } from "react"
import imgNaver from "assets/images/login-naver.png"

const NaverLogin = () => {
  const naverRef = useRef()
  const { naver } = window
  const { NAVER_CLIENT_ID, NAVER_CALLBACK_URL } = process.env

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    })
    naverLogin.init()
  }
  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0]
  }
  const userAccessToken = () => {
    // eslint-disable-next-line no-unused-expressions
    window.location.href.includes("access_token") && getToken()
  }

  useEffect(() => {
    initializeNaverLogin()
    userAccessToken()
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
