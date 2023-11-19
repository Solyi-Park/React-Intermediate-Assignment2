import { createGlobalStyle } from "styled-components";
import BackgroundImg from "./assets/backgroundImg.jpg";
const GlobalStyle = createGlobalStyle`
    body {
            background-image: url(${BackgroundImg});
            background-size: cover;
            background-position: center;
    }
`;

export default GlobalStyle;
