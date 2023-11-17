import React from "react";

export default function Header({showLetters}) {
  return (
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
  );
}
