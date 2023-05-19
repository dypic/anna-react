import React, { useEffect, useRef } from "react"
import imgNaver from "assets/images/login-naver.png"

const NaverLogin: React.FC = () => {
  const naverRef = useRef<HTMLDivElement | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { naver }: any = window
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
    if (naverRef.current) {
      const element = naverRef.current.children[0] as HTMLElement
      element.click()
    }
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
