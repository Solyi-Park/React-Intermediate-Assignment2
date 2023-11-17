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
    <StSection className="section">
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
            className="contentInputField"
            value={content}
            onChange={changeContents}
            id="content"
          />
        </StContentArea>
        <StMemberSelect>
          <select value={member} onChange={selectMember} id="select">
            <option value="">멤버 선택</option>
            <option value="재석">재석</option>
            <option value="명수">명수</option>
            <option value="형돈">형돈</option>
            <option value="준하">준하</option>
            <option value="홍철">홍철</option>
            <option value="하하">하하</option>
          </select>
          <label htmlFor="select">에게</label>
          <StAddLetterBtn>팬레터 보내기</StAddLetterBtn>
        </StMemberSelect>
      </form>
    </StSection>
  );
}
