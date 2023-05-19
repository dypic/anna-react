import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import StuffItem from "components/StuffItem"
import getItemsData from "data/getItemsData.json"
import React, { useState } from "react"

type stuffItem = {
  title: string
  distance: string
  price: string
  date: string
  img: string
  like: string
}

const GetItems: React.FC = () => {
  const [data, setData] = useState<stuffItem[]>(getItemsData)
  const onClickLike = (idx: number) => {
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
