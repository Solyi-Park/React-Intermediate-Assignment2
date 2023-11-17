import "./css/home.css";
import React, { useRef, useState } from "react";
import uuid from "react-uuid";
import initialState from "../shared/data";
import formatCurrentDateAndTime from "../shared/formatTime";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import Letters from "../components/Letters";
import styled from "styled-components";

function Home() {
  const [letters, setLetters] = useState(initialState);

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

  const handleAddBtn = (e) => {
    e.preventDefault();
    const newLetter = {
      id: uuid(),
      nickName,
      content,
      member,
      postTime: formatCurrentDateAndTime,
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
      <Header showLetters={showLetters} />
      <Input
        handleAddBtn={handleAddBtn}
        inputRef={inputRef}
        nickName={nickName}
        changeNames={changeNames}
        changeContents={changeContents}
        member={member}
        content={content}
        selectMember={selectMember}
      />
      <Letters
        letters={letters}
        memberFiltering={memberFiltering}
        handleLetterClick={handleLetterClick}
      />
    </div>
  );
}

export default Home;
