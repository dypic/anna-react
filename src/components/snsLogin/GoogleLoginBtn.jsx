/* eslint-disable */
import imgGoogle from "assets/images/login-google.png"
import { useGoogleLogin } from "@react-oauth/google"

const GoogleLoginBtn = () => {
  const login = useGoogleLogin({
    onSuccess: (res) => console.log(res),
    //res.access_token을 벡엔드에 전달하고 메인 화면으로 이동합니다.
  })

  return (
    <div onClick={() => login()}>
      <img src={imgGoogle} alt="구글 로그인" />
    </div>
  )
}
export default GoogleLoginBtn
