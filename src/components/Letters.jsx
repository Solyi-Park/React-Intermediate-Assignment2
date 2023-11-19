import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StUl = styled.ul`
  width: 550px;
  margin: 0 auto 0 auto;
`;

const StLetter = styled.li`
  width: 510px;
  padding: 20px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const StPfImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

const StInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: ;
`;

const StContent = styled.p`
  margin-left: 70px;
`;

const StP = styled.p`
  font-weight: 300;
`;

// Link는 왜 소괄호를 쓰나요..?
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Letters({
  letters,
  memberFiltering,
  handleLetterClick,
}) {
  return (
    <section>
      <StUl>
        {letters
          .filter((item) => {
            return memberFiltering[item.member] === true;
          })
          .map((item) => {
            return (
              <StLetter onClick={() => handleLetterClick(item)} key={item.id}>
                <StyledLink to={`/detail/${item.id}`}>
                  <StInfo>
                    <StPfImg src={item.avatar} alt="profileImg" />
                    <div>
                      <StP>{item.nickName}</StP>
                      <StP>{item.createdAt}</StP>
                    </div>
                  </StInfo>
                  <StContent>{item.content}</StContent>
                </StyledLink>
              </StLetter>
            );
          })}
      </StUl>
    </section>
  );
}
