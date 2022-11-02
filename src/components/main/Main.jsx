import React,{useState} from 'react'
import styled from 'styled-components'
import Button from './button/Button'
import Count from './count/Count'

const MainStyle = styled.main`
flex-grow: 1;
padding: 10px;
`

function Main () {

const [count, setCount] = useState(0)
const handleClic = () =>{
    setCount(count+1)
}

return (
    <MainStyle>
        <Count count={count}/>
        <Button handleClic={handleClic}/>
    </MainStyle>
    )
}

export default Main