import './css/detail.css'
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import initialState from '../shared/data'


function Detail() {
  const [ letters, setLetters ] = useState(initialState);
  const params =useParams();
  console.log('params: ', params)
  // const foundData = initialState.find(item => {
  //   return item.id === params.id
  // })

  
  // 수정모드 관리
  const [editMode, setEditMode] = useState(false);
  // 수정할 내용
  const [editContent, setEditContent] = useState("");

  // 수정 버튼 이벤트 핸들러
  const handleEditLetter = () => {
    setEditMode(true);
  };

  //수정 필드
  const handleEditContentChange = (e) => setEditContent(e.target.value);

  // 수정 완료(Letters 업데이트) 버튼 이벤트 핸들러
  const handleCompleteEdit = () => {
    const updateLetters = letters.map((letter) =>
      letter.id === clickedLetter.id
        ? { ...letter, content: editContent }
        : letter
    );
    setLetters(updateLetters);
    setEditMode(false);

    // 얘네를 두개를 바꿔도 동작한다? 배치처리...?
    setEditContent("");
    setClickedLetter({ ...clickedLetter, content: editContent });

    alert("수정이 완료되었습니다.");
  };
  //삭제
  const handleDeleteLetter = () => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    const filteredLetters = letters.filter(
      (letter) => letter.id !== clickedLetter.id
    );
    if (confirmDelete) {
      setLetters(filteredLetters);
      setClickedLetter(null);
      alert("삭제가 완료되었습니다.");
    }
  };

  // 클릭된 레터 정보 저장
  const [clickedLetter, setClickedLetter] = useState(null);
  console.log('클릭한 레터 정보: ', clickedLetter)
  
  return (
    <div>
      <Link to="/">홈으로</Link>
      <div>
        {!editMode && clickedLetter && (
          <div style={{ border: "1px solid #111", padding: "10px" }}>
            <div>
              <h2>{clickedLetter.nickName}</h2>
              <h2>{clickedLetter.postTime}</h2>
            </div>
            <p>TO.&nbsp;{clickedLetter.member}</p>
            <p>{clickedLetter.content}</p>
            <div>
              <button onClick={handleEditLetter}>수정</button>
              <button onClick={handleDeleteLetter}>삭제</button>
            </div>
          </div>
        )}
        {editMode && (
          <div>
            <label htmlFor="editContent"></label>
            <textarea
              value={editContent}
              onChange={(e) => handleEditContentChange(e)}
              id="editContent"
            ></textarea>
            <button onClick={handleCompleteEdit}>수정 완료</button>
            <button
              onClick={() => {
                setEditMode(false);
              }}
            >
              취소
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
