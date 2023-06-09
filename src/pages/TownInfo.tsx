import HeadersSection from "components/layout/HeaderSection"
import NavSection from "components/layout/NavSection"
import TabQuestion from "components/TabQuestion"
import TownTodayPopular from "components/TownTodayPopular"
import popularPostData from "data/popularPostData.json"

import React, { useRef, useState } from "react"

type TabProps = (tab: React.MouseEvent<HTMLLIElement, MouseEvent>, text: string) => void

const TownInfo: React.FC = () => {
  const [focusTab, setFocusTab] = useState<string>("질문")
  const movingBar = useRef<HTMLUListElement>(null)

  const Tabs = ["질문", "분실물 센터", "모임"]
  const changeTab: TabProps = (tab, text) => {
    // 바 이동
    if (movingBar.current) {
      const parentLeft = movingBar.current.getBoundingClientRect().left
      const eventTarget = tab.target as HTMLElement
      const divLeft = eventTarget.getBoundingClientRect().left
      const divWidth = eventTarget.clientWidth
      const bar = document.querySelector(".tap-moving-bar") as HTMLElement
      bar.style.left = `${divLeft - parentLeft}px`
      bar.style.width = `${divWidth}px`
    }
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
