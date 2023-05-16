import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import StuffItem from "components/StuffItem"
import storeItemsData from "data/storeItemsData.json"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Main = () => {
  const [data, setData] = useState(storeItemsData)
  const onClickLike = (idx) => {
    const copy = [...data]
    if (data[idx].like === "false") {
      copy[idx].like = "true"
      setData(copy)
    } else {
      copy[idx].like = "false"
      setData(copy)
    }
  }
  return (
    <div className="container-maxWidth">
      <HeadersSection />
      <NavSection />
      <div className="container-wrap storeList">
        <ul className="storeList-wrap">
          {data.map((item, index) => {
            return <StuffItem item={item} key={index} index={index} onClickLike={onClickLike} />
          })}
        </ul>
      </div>
    </div>
  )
}
export default Main
