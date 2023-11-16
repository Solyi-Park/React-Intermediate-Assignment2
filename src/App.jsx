import uuid from "react-uuid";
import "./App.css";
import "./reset.css";
// import Router from "./shared/Router";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Router from "./shared/Router";

function App() {

  //팬레터 입력 영역 state 관리

  //멤버별 레터 Show OR Not 상태 관리-> 이렇게 하니까 너무 길어짐..
  // 각 멤버별이 아니라 하나의 state안에 전체 멤버의 show or not을 객체형태로 관리
  const [memberFiltering, setMemberFiltering] = useState({
    재석: true,
    명수: true,
    형돈: true,
    준하: true,
    홍철: true,
    하하: true,
  });



  // ==========================이벤트 핸들러===================

  return (
    <Router />
    
  );
}

export default App;
