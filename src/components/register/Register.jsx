import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: ${(props) => (props.fredy ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Register = () => {
  // const [nombre, setNombre] = useState("Oswaldo");
  // const [apellido, setApellido] = useState("Mendez");
  // const [data, setData]=useState({});

  // const handleSetName=(e)=>{
  //   // console.log("log",e.target);
  //   // console.dir(e.target);
  //   setNombre(e.target.value);
  // };
  // const handleSetLastName=(e)=>{
  //   setApellido(e.target.value);
  // };

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   setData({
  //     nombre,
  //     apellido,
  //   });
  // };

  // return (
  //   <DivContainer>
  //     <Form fredy onSubmit={handleSubmit}>
  //       <label>
  //         Nombre:
  //         <input 
  //           onInput={handleSetName}
  //           type="text"
  //           name="nombre"
  //           value={nombre}
  //         />
  //       </label>
  //       <label>
  //         Apellido:
  //         <input
  //           onInput={handleSetLastName}
  //           type="text"
  //           name="apellido"
  //           value={apellido}
  //         />
  //       </label>
  //       <button>Enviar</button>
  //     </Form>

  //     <Link to="/">
  //       <button>home</button>
  //     </Link>

  //     <h2>Nombre:{nombre}</h2>
  //     <h2>Apellido:{apellido}</h2>
  //     <h3>Data Nombre: {data.nombre}</h3>
  //     <h3>Data Apellido: {data.apellido}</h3>
  //   </DivContainer>
  // );
  // -------------------------------Segunda Forma-------------------------------------------
  // const [backData, setBackData]=useState({});
  const [data, setData]=useState({});

  const handleInput=(e)=>{
    // console.dir(e.target);
    // console.log(e.target);
    let name=e.target.name;
    let value=e.target.value;
    let newData={...data};
    newData[name]= value;
    setData(newData);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setData({});
  };

  return (
    <DivContainer>
      <Form fredy onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            onInput={handleInput}
            type="text"
            name="nombre"
          />
        </label>
        <label>
          Apellido:
          <input
            onInput={handleInput}
            type="text"
            name="apellido"
          />
        </label>
        <button>Enviar</button>
      </Form>

      <Link to="/">
        <button>home</button>
      </Link>

      {/*<h2>Nombre:{}</h2>*/}
      {/*<h2>Apellido:{}</h2>*/}
      <h3>Data Nombre: {data.nombre}</h3>
      <h3>Data Apellido: {data.apellido}</h3>
    </DivContainer>
  );
};

export default Register;
