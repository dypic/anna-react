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
      <Route path="/storeItem" element={<StoreItem />} />
      <Route path="/chatting" element={<Chatting />} />
    </Routes>
  )
}

export default App
