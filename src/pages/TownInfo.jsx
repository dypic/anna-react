import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import TabQuestion from "components/TabQuestion"
import TownTodayPopular from "components/TownTodayPopular"
import popularPostData from "data/popularPostData.json"

import { useRef, useState } from "react"

const TownInfo = () => {
  const [focusTab, setFocusTab] = useState("질문")
  const movingBar = useRef()

  const Tabs = ["질문", "분실물 센터", "모임"]
  const changeTab = (tab, text) => {
    // 바 이동
    const parentLeft = movingBar.current.getBoundingClientRect().left
    const divLeft = tab.target.getBoundingClientRect().left
    const divWidth = tab.target.clientWidth
    const bar = document.querySelector(".tap-moving-bar")
    bar.style.left = `${divLeft - parentLeft}px`
    bar.style.width = `${divWidth}px`

    setFocusTab(text)
  }
  return (
    <div className="container-maxWidth">
      <HeadersSection />
      <NavSection />
      <div className="container-wrap townInfo">
        <div className="townInfo-popular-posts">
          <p className="title2">오늘의 인기글</p>
          <ul>
            {popularPostData.map((item, index) => {
              return <TownTodayPopular item={item} index={index} key={index} />
            })}
          </ul>
        </div>

        <div className="townInfo-taps">
          <ul className="townInfo-taps__list title2" ref={movingBar}>
            {Tabs.map((tabItem, index) => {
              return (
                <li
                  className={`townInfo-tab ${focusTab === tabItem ? "on" : ""}`}
                  onClick={(tab) => changeTab(tab, tabItem)}
                  role="presentation"
                  key={index}
                >
                  {tabItem}
                </li>
              )
            })}
            <li className="tap-moving-bar" />
          </ul>

          <ul className="townInfo-taps__contents">
            {focusTab === "질문" ? (
              <TabQuestion />
            ) : focusTab === "분실물 센터" ? (
              <li className="townInfo-taps__content">
                <div style={{ fontSize: "20px" }}>분실물 센터 내용입니다.</div>
              </li>
            ) : (
              <li className="townInfo-taps__content">
                <div style={{ fontSize: "20px" }}>모임 내용입니다.</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default TownInfo
