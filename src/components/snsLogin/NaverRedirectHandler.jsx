import { useLocation } from "react-router-dom"

const NaverRedirectHandler = () => {
  const location = useLocation()

  const getNaverToken = () => {
    if (!location.hash) return
    const token = location.hash.split("=")[1].split("&")[0]
    // console.log(token)
    // 백엔드에 전달합니다. 메인화면으로 이동합니다
  }
  getNaverToken()
  return <div>네이버 로그인 중입니다...</div>
}
export default NaverRedirectHandler
