import { useState } from "react";

export const [letters, setLetters] = useState([
    {
      id: uuid(),
      nickName: "팬1",
      content: "패션왕 도니!",
      member: "형돈",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬2",
      content: "영원한 일인자",
      member: "재석",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬3",
      content: "돌 + I 킹!",
      member: "홍철",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬4",
      content: "아부지~",
      member: "명수",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬5",
      content: "쩌리짱",
      member: "준하",
      postTime: formattedDateAndTime,
    },
    {
      id: uuid(),
      nickName: "팬6",
      content: "하이브리드 리오레이비 쌤이솟아",
      member: "하하",
      postTime: formattedDateAndTime,
    },
  ]);