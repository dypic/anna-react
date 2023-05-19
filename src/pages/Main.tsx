import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import StuffItem from "components/StuffItem"
import storeItemsData from "data/storeItemsData.json"
import React, { useState } from "react"

type stuffItem = {
  title: string
  distance: string
  price: string
  date: string
  img: string
  like: string
}

const Main: React.FC = () => {
  const [data, setData] = useState<stuffItem[]>(storeItemsData)
  const onClickLike = (idx: number) => {
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
