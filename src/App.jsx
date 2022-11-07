import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";
import Header from "./components/header/Header"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#root {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  min-height: 100vh;
  width: 100vw;
  background-color: goldenrod;
}
`;
function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Main/>
    </>
  );
}
export default App;
