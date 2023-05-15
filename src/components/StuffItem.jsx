import imgIconLikeOn from "assets/images/icon-like-on.svg"
import imgIconLike from "assets/images/icon-like.svg"

const StuffItem = ({ item, index, onClickLike }) => {
  return (
    <li className="storeList-inner" key={index}>
      <a href="#" className="storeList-inner-link">
        <div className="storeList-img">
          <img src={item.img} alt="샘플이미지" />
        </div>
        <div className="storeList-title">
          <p className="storeList-title_contents">
            <span className="title4-KR">{item.title}</span>
            <small className="small3">{item.distance}</small>
            <strong className="body2">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 / {item.date}
            </strong>
          </p>
        </div>
      </a>
      <button className="storeList-likeIcon" type="button" onClick={() => onClickLike(index)}>
        <img src={item.like === "true" ? imgIconLikeOn : imgIconLike} alt="like" />
      </button>
    </li>
  )
}
export default StuffItem
