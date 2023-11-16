import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Detail() {
  // 현재 날짜, 시간
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const formattedDateAndTime = `${year}.${
    month + 1
  }.${date} ${hours}:${minutes}:${seconds}`;
  // console.log(formattedDateAndTime)
  const [letters, setLetters] = useState([
    {
      id: uuid(),
      nickName: "팬1",
      content: "패션왕 도니!",
      member: "형돈",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬2",
      content: "영원한 일인자",
      member: "재석",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬3",
      content: "돌 + I 킹!",
      member: "홍철",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬4",
      content: "아부지~",
      member: "명수",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬5",
      content: "쩌리짱",
      member: "준하",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬6",
      content: "하이브리드 리오레이비 쌤이솟아",
      member: "하하",
      postTime: formattedDateAndTime,
    },
  ]);
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
