/* eslint-disable no-console */
import React, { useEffect } from "react"
import axios from "axios"

const KakaoRedirectHandler: React.FC = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get("code") // 인가코드 받는 부분
    const grant_type = "authorization_code"
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_SECRET
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URL

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        },
      )
      // .then((res) => res.json())
      .then((res) => {
        console.log(res)
        const { data } = res
        const { access_token } = data
        if (access_token) {
          console.log(`Bearer ${access_token}`)
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              },
            )
            .then((res) => {
              console.log("데이터 성공:")
              console.log(res)
            })
        } else {
          console.log("access_token 없음!")
        }
        // res에 포함된 토큰 받아서 원하는 로직을 하면됩니다..
        // 이후 백엔드 작업이 필요합니다.
      })
  }, [])

  return <div>카카오 로그인 중...</div>
}

export default KakaoRedirectHandler
