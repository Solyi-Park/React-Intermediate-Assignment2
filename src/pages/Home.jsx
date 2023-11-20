import "./css/home.css";
import React, { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";
import jsonData from "../shared/data";
import formatCurrentDateAndTime from "../shared/formatTime";
import Header from "../components/Header";
import Input from "../components/Input";
import Letters from "../components/Letters";
import profileImg from "../assets/profileImg.jpg";

function Home() {
  const [letters, setLetters] = useState(jsonData);

  const inputRef = useRef("");

  const [nickName, setName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("");
 // 현재 보이는 팬레터 리스트의 멤버
 const [selectedMember, setSelectedMember] = useState(null);

 // 클릭된 팬레터 정보 저장
  const [clickedLetter, setClickedLetter] = useState(null);
  
  //클릭한 멤버의 팬레터만 보이게 하기위해 필터링
  const [memberFiltering, setMemberFiltering] = useState({
    호동: true,
    수근: true,
    지원: true,
    규현: true,
    민호: true,
    피오: true,
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

  //팬레터추가 이벤트 핸들러
  const handleAddBtn = (e) => {
    e.preventDefault();
    const newLetter = {
      createdAt: formatCurrentDateAndTime(),
      avatar: profileImg,
      nickName,
      content,
      member,
      id: uuid(),
    };
    if (nickName === "") {
      alert("닉네임을 입력해주세요.");
    } else if (content === "") {
      alert("내용을 입력해주세요.");
    } else if (member === "") {
      alert("멤버를 선택해주세요.");
    } else {
      const updateLetters = [...letters, newLetter];
      setLetters(updateLetters);
      alert(`${member}에게 팬레터 보내기 완료!`);
      setName("");
      setContent("");
      setMember("");
      inputRef.current.focus();
    }
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
      <Header showLetters={showLetters}
      selectedMember={selectedMember} />
      <Input
        handleAddBtn={handleAddBtn}
        inputRef={inputRef}
        nickName={nickName}
        changeNames={changeNames}
        changeContents={changeContents}
        member={member}
        content={content}
        selectMember={selectMember}
        handleLetterClick={handleLetterClick}
      />
      <Letters
        letters={letters}
        memberFiltering={memberFiltering}

      />
    </div>
  );
}

export default Home;
