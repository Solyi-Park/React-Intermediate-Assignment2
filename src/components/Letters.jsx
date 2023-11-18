import React from "react";
import { Link } from "react-router-dom";
import "./Letters.css";
import LogoImage from "../assets/logoImg.png";  
import styled from "styled-components";// 이미지를 import

 const StPfImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
 `
export default function Letters({
  letters, memberFiltering, handleLetterClick
}) {
  return (
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
                <Link to={`/detail/${item.id}`}>
                  <div>
                    <div>
                      <StPfImg src={LogoImage} alt="LogoImage" />  {/* 수정된 이미지 소스 사용 */}
                      <div>
                        <p>{item.nickName}</p>
                        <p>{item.postTime}</p>
                      </div>
                    </div>
                    <p>{item.content}</p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
