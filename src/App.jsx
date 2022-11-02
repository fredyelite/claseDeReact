import { createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";
import Nav from "./components/header/nav/Nav";
import Main from "./components/main/Main"

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
  min-height: 100vh;
  background-color: goldenrod;
}
`;
function App() {
  
  return (
    <>
      <GlobalStyle />
      {/*Render Prop*/}
      <Header titulo="logo" nav={<Nav link="render"/>}>        
        {/* ChildrenProp */}
        {/* <h2>Empresa</h2>
        <h3> "nombre aqui" </h3> */}
        {/* <Nav/> */}
      </Header>
      <Main/>
    </>
  );
}
export default App;
