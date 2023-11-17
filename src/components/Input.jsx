import React from "react";

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
            <textarea value={content} onChange={changeContents} id="content" />
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
  );
}
