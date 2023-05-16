import imgKaKao from "assets/images/login-kakao.png"

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`
  const onClickKaKao = () => {
    window.location.href = KAKAO_AUTH_URL
  }
  return (
    <div onClick={() => onClickKaKao()} role="presentation">
      <img src={imgKaKao} alt="카카오 로그인" />
    </div>
  )
}
export default KakaoLogin
