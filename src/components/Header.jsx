// Header.jsx

import React, { useState } from "react";
import styled from "styled-components";
import Hodong from "../assets/호동.jpg";
import Suguen from "../assets/수근.jpg";
import Jiwon from "../assets/지원.jpg";
import Kyuhyun from "../assets/규현.jpg";
import Minho from "../assets/민호.jpg";
import PO from "../assets/피오.jpg";

const StHeader = styled.div`
  position: relative;
  height: 550px;
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
  margin-top: 50px;
  font-family: "YEONGJUPunggiGinsengTTF";
  font-size: 69px;
  color: white;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  color: black;
`;

const StBtns = styled.div`
  position: absolute;
  margin: 250px 0 0 0;
`;

const StBtn = styled.button`
  width: 150px;
  height: 150px;
  margin-right: 15px;
  border: 1px solid white;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  color: white;
  filter: ${(props) => (props.isSelected ? "brightness(1)" : "brightness(0.5)")};
  &:hover {
    filter: brightness(1);
    cursor: pointer;
  }
`;

function Header({ showLetters, handleMemberClick, selectedMember }) {

  return (
    <StHeader>
      <StTitle>신서유기</StTitle>
      <StBtns>
        <StBtn
          img={Hodong}
          onClick={() => handleMemberClick("호동")}
          isSelected={selectedMember === "호동"}
        ></StBtn>
        <StBtn
          img={Suguen}
          onClick={() => handleMemberClick("수근")}
          isSelected={selectedMember === "수근"}
        ></StBtn>
        <StBtn
          img={Jiwon}
          onClick={() => handleMemberClick("지원")}
          isSelected={selectedMember === "지원"}
        ></StBtn>
        <StBtn
          img={Kyuhyun}
          onClick={() => handleMemberClick("규현")}
          isSelected={selectedMember === "규현"}
        ></StBtn>
        <StBtn
          img={Minho}
          onClick={() => handleMemberClick("민호")}
          isSelected={selectedMember === "민호"}
        ></StBtn>
        <StBtn
          img={PO}
          onClick={() => handleMemberClick("피오")}
          isSelected={selectedMember === "피오"}
        ></StBtn>
      </StBtns>
    </StHeader>
  );
}

export default Header;
