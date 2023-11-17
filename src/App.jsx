import "./reset.css";
// import Router from "./shared/Router";
// import { useDispatch, useSelector } from "react-redux";
import Router from "./shared/Router";
import GlobalStyle from "GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
