import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";
// import Nav from "./nav/Nav";

const HeaderStyle = styled.header`
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: azure;
`;

function Header({ titulo,children,nav }) {
return (
    <HeaderStyle>
    <h1>{titulo}</h1>    
    {/* opcion 1 importo directamente */}
    <Nav link="componente"/>
    {/* opcion 2 childrenProp */}
    {/* {children[0]} */}
    {/* {children[1]} */}
    {/* {children[2]} */}
    {/* opcion 3 RenderProp */}
    {/*{nav}*/}
    </HeaderStyle>
  );
}

export default Header;
