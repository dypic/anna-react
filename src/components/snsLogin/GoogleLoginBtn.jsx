/* eslint-disable */
import imgGoogle from "assets/images/login-google.png"
import { useGoogleLogin } from "@react-oauth/google"

const GoogleLoginBtn = () => {
  const login = useGoogleLogin({
    onSuccess: (res) => console.log(res),
  })

  return (
    <div onClick={() => login()}>
      <img src={imgGoogle} alt="구글 로그인" />
    </div>
  )
}
export default GoogleLoginBtn
