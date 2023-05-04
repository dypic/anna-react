import { Route, Routes } from "react-router-dom"
import "assets/stylesheets/style.scss"
import Main from "pages/main"
import Login from "pages/login"
import StoreItem from "pages/storeItem"
import Chatting from "pages/chatting"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/storeItem/:id" element={<StoreItem />} />
      <Route path="/chatting/:id" element={<Chatting />} />
      <Route path="/*" element={<div style={{ fontSize: "38px", textAlign: "center" }}>페이지가 없어요</div>} />
    </Routes>
  )
}

export default App
