import React, { useRef, useState } from "react";
import uuid from "react-uuid";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();
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
  const inputRef = useRef("");
  const [nickName, setName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("");

  const [clickedLetter, setClickedLetter] = useState(null);
  const [memberFiltering, setMemberFiltering] = useState({
    재석: true,
    명수: true,
    형돈: true,
    준하: true,
    홍철: true,
    하하: true,
  });

  //펜레터 작성 영역
  const changeNames = (e) => {
    setName(e.target.value);
  };
  const changeContents = (e) => {
    setContent(e.target.value);
  };
  const selectMember = (e) => {
    const memberValue = e.target.value;
    setMember(memberValue);
  };

  //팬레터 추가버튼 이벤트 핸들러
  const handleAddBtn = (e) => {
    e.preventDefault();
    const newLetter = {
      id: uuid(),
      nickName,
      content,
      member,
      postTime: formattedDateAndTime,
    };
    const updateLetters = [...letters, newLetter];
    setLetters(updateLetters);
    setName("");
    setContent("");
    setMember("");
    inputRef.current.focus();
  };
  //멤버이름 클릭시 보여지는 레터 목록
  const showLetters = (clickedMember) => {
    setMemberFiltering((prev) => {
      const updatedFiltering = Object.fromEntries(
        Object.entries(prev).map(([member]) => {
          // [member]만 있기 때문에 배열의 첫번째 요소만 추출한다.
          // 추출한 값은 새로운 배열에 키값으로 사용된다.
          // 그래서 기존 객체의 키들만으로 이루어진 새 배열을 만드는 것!! 어우 어렵네
          return [
            member, //<--memberFiltering 객체의 키가 재석,명수, 형돈, 준하.... 이므로
            // member는 각각의 멤버를 의미함.
            member === clickedMember, // 얘는 불린값 반환
          ];
        })
      );
      return updatedFiltering;
    });
  };
  // useEffect(() => {
  //   console.log(memberFiltering);
  // }, [memberFiltering]);

  // 클릭된 펜레터 정보 업데이트 이벤트 핸들러

  const handleLetterClick = (clickedLetter) => {
    setClickedLetter(clickedLetter);
  };

  return (
    <div>
      <header style={{ backgroundColor: "powderblue" }}>
        <div>
          <h1>무한도전 추억 페이지</h1>
          <div>
            <button onClick={() => showLetters("재석")}>재석</button>
            <button onClick={() => showLetters("명수")}>명수</button>
            <button onClick={() => showLetters("형돈")}>형돈</button>
            <button onClick={() => showLetters("준하")}>준하</button>
            <button onClick={() => showLetters("홍철")}>홍철</button>
            <button onClick={() => showLetters("하하")}>하하</button>
          </div>
        </div>
      </header>
      <main>
        <section style={{ backgroundColor: "#d9aaf0" }}>
          <div>
            <form onSubmit={handleAddBtn}>
              <div>
                <label htmlFor="inputBox">닉네임</label>
                <input
                  ref={inputRef}
                  value={nickName}
                  onChange={changeNames}
                  id="inputBox"
                  placeholder="최대 20글자까지 작성할 수 있습니다."
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="content">내용</label>
                <textarea
                  value={content}
                  onChange={changeContents}
                  id="content"
                />
              </div>
              <div>
                <label htmlFor="select">누구에게 보내실 건가요?</label>
                <select value={member} onChange={selectMember} id="select">
                  <option value="">멤버 선택</option>
                  <option value="재석">재석</option>
                  <option value="명수">명수</option>
                  <option value="형돈">형돈</option>
                  <option value="준하">준하</option>
                  <option value="홍철">홍철</option>
                  <option value="하하">하하</option>
                </select>
              </div>
              <button>팬레터 등록</button>
            </form>
          </div>
        </section>
        팬레터 영역
        <section style={{ backgroundColor: "#fabbaf" }}>
          <ul>
            {letters
              .filter((item) => {
                return memberFiltering[item.member] === true;
              })
              .map((item) => {
                return (
                  <li
                    onClick={() => handleLetterClick(item)}
                    key={item.id}
                    style={{
                      border: "1px solid black",
                      padding: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <div>
                      <p>{item.nickName}</p>
                      <p>{item.postTime}</p>
                    </div>
                    <p>{item.content}</p>
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
