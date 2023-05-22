/* eslint-disable jsx-a11y/anchor-has-content */
import imgIconPlus from "assets/images/icon-plus.svg"
import imgIconPointer from "assets/images/icon-pointer.svg"
import React from "react"

const AddItem: React.FC = () => {
  // 이미지 업로드시 파일 li로 넣어주기
  function loadFile(ImgFile: React.ChangeEvent<any>) {
    const uploadFiles = Array.from(ImgFile.target.files)
    uploadFiles.forEach((file: any) => {
      const container = document.getElementById("imgList")
      const newLi = document.createElement("li")
      const newImage = document.createElement("img")

      newImage.setAttribute("class", "adding-img")
      newImage.src = URL.createObjectURL(file)
      container?.appendChild(newLi).appendChild(newImage)
    })
  }
  // 초기화 버튼 클릭시 초기화
  function textClear() {
    const textarea = document.getElementById("textareaClear") as HTMLTextAreaElement
    textarea.value = ""
  }
  return (
    <div className="addItem container-maxWidth">
      <div className="addItem-img">
        <ul className="addItem-imgList" id="imgList">
          <li>
            <label htmlFor="chooseFile">
              <img src={imgIconPlus} alt="이미지 추가하기" />
              <input
                type="file"
                id="chooseFile"
                name="chooseFile"
                accept=".jpg, .png"
                multiple
                onChange={(ImgFile) => loadFile(ImgFile)}
              />
            </label>
          </li>
        </ul>
      </div>
      <ul className="addItem-valueList title4-KR">
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>카테고리</span>
          <div>
            <span />
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>상품명</span>
          <div>
            <span />
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>가격 및 보증금</span>
          <div>
            <span />
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>렌탈 기간</span>
          <div>
            <span />
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>가격 제안 가능 여부</span>
          <div>
            <span>가능</span>
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
        <li>
          <a href="#" className="addItem-valueList-link" />
          <span>위치</span>
          <div>
            <span />
            <img src={imgIconPointer} alt="이동" />
          </div>
        </li>
      </ul>
      <textarea className="body1" placeholder="게시글 내용을 입력해주세요." id="textareaClear" />
      <div className="addItem-buttons">
        <button type="button" className="btn-s secon-btn1" onClick={() => textClear()}>
          초기화
        </button>
        <button type="submit" className="btn-s secon-btn2">
          완료
        </button>
      </div>
    </div>
  )
}
export default AddItem
