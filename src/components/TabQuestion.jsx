import imgSample from "assets/images/sample.png"
import imgSampleProfile from "assets/images/sample-profile.png"
import questionData from "data/questionData.json"

const TabQuestion = () => {
  return (
    <li className="townInfo-taps__content">
      <ul>
        {questionData.map((item, index) => {
          return (
            <li className="townInfo-taps__questions-item" key={index}>
              <div className="question-profile">
                <img src={item.profileImg} alt="프로필 사진" />
                <div className="question-profile-info">
                  <p className="title3">{item.nickName}</p>
                  <p className="small3">
                    내거리 {item.distance} &middot; {item.date}
                  </p>
                </div>
              </div>
              <div className="question-content">
                <p className="question-texts">{item.contentText}</p>
                <ul className="question-content-imgs">
                  {item.contentImgs.map((img, index) => {
                    return (
                      <li key={index}>
                        <img src={img} alt="" />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
export default TabQuestion
