import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  position: relative;
  /* background-image: url(../../assets/header.jpg); */
  background-color: cadetblue;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.h1`
  @font-face {
    font-family: "YEONGJUPunggiGinsengTTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/YEONGJUPunggiGinsengTTF.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  position: absolute;
  margin-bottom: 15vh;
  font-family: "YEONGJUPunggiGinsengTTF";
  font-size: 69px;
`;

const StBtnsLayOut = styled.img`
  position: absolute;
  margin-top: 40hv;
`;
const StBtns = styled.div`
  position: absolute;
  margin-top: 35vh;
`;

const StBtn = styled.button`
  padding: 7vh;
  margin-right: 10px;
  border: 1px solid white;
  background-color: #111;
  color: white;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;

function Header({ showLetters }) {
  return (
    <StHeader>
      <StTitle>영원하라 무도!</StTitle>
      <StBtnsLayOut src="../../film.png" alt="btnsLayout" />
      <StBtns>
        <StBtn class="btn" onClick={() => showLetters("재석")}>
          재석
        </StBtn>
        <StBtn class="btn" onClick={() => showLetters("명수")}>
          명수
        </StBtn>
        <StBtn class="btn" onClick={() => showLetters("형돈")}>
          형돈
        </StBtn>
        <StBtn class="btn" onClick={() => showLetters("준하")}>
          준하
        </StBtn>
        <StBtn class="btn" onClick={() => showLetters("홍철")}>
          홍철
        </StBtn>
        <StBtn class="btn" onClick={() => showLetters("하하")}>
          하하
        </StBtn>
      </StBtns>
    </StHeader>
  );
}

export default Header;
