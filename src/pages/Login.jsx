import imgKaKao from "assets/images/login-kakao.png"
import imgGoogle from "assets/images/login-google.png"
import imgEtc from "assets/images/login-etc.png"
import Button from "components/common/Button"
import NaverLogin from "components/snsLogin/NaverLogin"
import GoogleLoginBtn from "components/snsLogin/GoogleLoginBtn"

const Login = () => {
  return (
    <div className="login container-maxWidth">
      <div className="login-form">
        <svg
          className="login-form__logo"
          width="72"
          height="48"
          viewBox="0 0 72 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72 0C58.7452 -1.15877e-06 48 10.7452 48 24C48 37.2548 58.7452 48 72 48L72 0Z"
          />
        </svg>
        <div className="login-form__input">
          <form action="">
            <input type="text" placeholder="아이디" className="body3" />
            <input type="password" placeholder="패스워드" className="body3" autoComplete="off" />
            <Button addclass="pry-btn1">로그인</Button>
          </form>
        </div>
      </div>
      <div className="login-social">
        <p className="title4-KR">간편 로그인</p>
        <ul className="login-social-list">
          <li>
            <NaverLogin />
          </li>
          <li>
            <img src={imgKaKao} alt="카카오 로그인" />
          </li>
          <li>
            <GoogleLoginBtn />
          </li>
          <li>
            <img src={imgEtc} alt="기타 로그인" />
          </li>
        </ul>
        <p className="small1">
          <a href="#">아이디/패스워드 찾기</a>
        </p>
      </div>
    </div>
  )
}

export default Login
