import React from "react";
import styled from "styled-components";
// import Nav from "./nav/Nav";

const HeaderStyle = styled.header`
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: azure;
`;

function Header({ titulo,nav }) {
return (
    <HeaderStyle>
    <h1>{titulo}</h1>    
    {/* opcion 1 importo directamente */}
    {/* <Nav/> */}
    {/* opcion 2 childrenProp */}
    {/* {children[2]} */}
    {/* opcion 3 RenderProp */}
    {nav}
    </HeaderStyle>
  );
}

export default Header;
