import "assets/stylesheets/style.scss"
import Main from "pages/Main"
import Login from "pages/Login"
import StoreItem from "pages/StoreItem"
import Chatting from "pages/Chatting"
import GetItems from "pages/GetItems"
import AddItem from "pages/AddItem"
import TownInfo from "pages/TownInfo"
import MyPage from "pages/MyPage"
import KakaoRedirectHandler from "components/snsLogin/KakaoRedirectHandler"
import NaverRedirectHandler from "components/snsLogin/NaverRedirectHandler"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/getItem" element={<GetItems />} />
      <Route path="/storeItem/:id" element={<StoreItem />} />
      <Route path="/chatting/:id" element={<Chatting />} />
      <Route path="/addItem" element={<AddItem />} />
      <Route path="/townInfo" element={<TownInfo />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      <Route path="/oauth/callback/naver" element={<NaverRedirectHandler />} />
      <Route path="/*" element={<div style={{ fontSize: "38px", textAlign: "center" }}>페이지가 없어요</div>} />
    </Routes>
  )
}

export default App
