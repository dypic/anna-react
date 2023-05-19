import React from "react"

type popularPostType = {
  img: string
  label: string
  title: string
  like: string
  comment: string
}
interface TownTodayPopularProps {
  item: popularPostType
  index: number
}

const TownTodayPopular: React.FC<TownTodayPopularProps> = ({ item, index }) => {
  return (
    <li key={index}>
      <span className="townInfo-popular-posts__label small3">{index + 1}</span>
      <img src={item.img} alt="인기글 사진" />
      <div>
        <p className="townInfo-popular-posts__title title4-KR">
          [{item.label}]{item.title}
        </p>
        <p className="townInfo-popular-posts__info small3">
          좋아요 {item.like} &middot; 댓글 {item.comment}
        </p>
      </div>
    </li>
  )
}
export default TownTodayPopular
