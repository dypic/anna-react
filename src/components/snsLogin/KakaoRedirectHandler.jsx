import React, { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const KakaoRedirectHandler = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get("code") // 인가코드 받는 부분
    const grant_type = "authorization_code"
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_SECRET

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        },
      )
      // .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("kakao-token", res.data.access_token)
        navigate("/")
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        // 이후 백엔드 작업이 필요함
      })
  }, [])

  return <div>카카오 로그인 중...</div>
}

export default KakaoRedirectHandler
