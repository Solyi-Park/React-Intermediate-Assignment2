import React from "react";
import styled from "styled-components";

const StSection = styled.section`
  // background-color: #d9aaf0;
  margin: 10px auto;
  padding: 10px;
  max-width: 550px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #111;
  border-radius: 5px;
`;
const StNickNameArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 510px;
  height: 40px;
  // background-color: red;
`;

const StNickNameInputField = styled.input`
  max-width: 400px;
  width: 85%;
  height: 20px;
`;

const StContentArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 510px;
  // background-color: aqua;
  height: 100px;
`;

const StContentInputField = styled.textarea`
  max-width: 400px;
  width: 85%;
  height: 80px;
`;

const StMemberSelect = styled.div`
  // background-color: orange;
  margin-left: 150px;
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StAddLetterBtn = styled.button`
  padding: 10px 15px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: transparent;
  color: black;
  transition: 0.2s;
  font-size: 15px;
  &: hover {
    background-color: #282829;
    color: white;
    cursor: pointer;
    }
  }
`;

export default function Input({
  handleAddBtn,
  inputRef,
  nickName,
  changeNames,
  content,
  changeContents,
  member,
  selectMember,
}) {
  return (
    <StSection>
      <form onSubmit={handleAddBtn}>
        <StNickNameArea>
          <label htmlFor="inputBox">닉네임</label>
          <StNickNameInputField
            ref={inputRef}
            value={nickName}
            onChange={changeNames}
            id="inputBox"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            autoFocus
          />
        </StNickNameArea>
        <StContentArea>
          <label htmlFor="content">내용</label>
          <StContentInputField
            value={content}
            onChange={changeContents}
            id="content"
            placeholder="최대 100글자까지 작성할 수 있습니다."
          />
        </StContentArea>
        <StMemberSelect>
          <select value={member} onChange={selectMember} id="select">
            <option value="">멤버 선택</option>
            <option value="호동">호동</option>
            <option value="수근">수근</option>
            <option value="지원">지원</option>
            <option value="규현">규현</option>
            <option value="민호">민호</option>
            <option value="피오">피오</option>
          </select>
          <label htmlFor="select">에게</label>
          <StAddLetterBtn>팬레터 보내기</StAddLetterBtn>
        </StMemberSelect>
      </form>
    </StSection>
  );
}
