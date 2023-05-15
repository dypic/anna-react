import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import StuffItem from "components/StuffItem"
import getItemsData from "data/getItemsData.json"
import { useState } from "react"

const GetItems = () => {
  const [data, setData] = useState(getItemsData)
  const onClickLike = (idx) => {
    if (data[idx].like === "false") {
      const copy = [...data]
      copy[idx].like = "true"
      setData(copy)
    } else {
      const copy = [...data]
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
export default GetItems
