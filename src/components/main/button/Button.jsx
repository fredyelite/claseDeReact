import React  from 'react'
import styled from 'styled-components'

const Buttontyle = styled.button``

function Button({handleClic}) {

return (
    <>
    <Buttontyle onClick={handleClic}>Agregar</Buttontyle>
    </>
)
}

export default Button