import React from "react";
import { Link } from "react-router-dom";

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
                      <img src="../assets/logoImg.png" alt="LogoImage" />
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
