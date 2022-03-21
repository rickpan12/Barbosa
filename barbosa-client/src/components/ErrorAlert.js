import React from 'react'
import styled from 'styled-components'

const ErrorAlert = () => {
  return (
    <Wrapper>
        <div className='main text'>
            Please fill out all fields! 
        </div>
    </Wrapper>
  )
}

export default ErrorAlert

const Wrapper = styled.div `
    .main {
        border: 1px solid white;
        width: 30%;
        border-radius: 10px;
        padding: 1%;
        font-size:1vw;
        justify-content: center;
        background-color: #E64970;
        border: 0.3vw solid #F94571;

    }

`