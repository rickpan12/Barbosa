import React from 'react'
import styled from 'styled-components'

const LogoButton = () => {
  return (
      <Wrapper>
          <button className='brand text'>Barbosa</button>
      </Wrapper>
    
  )
}

export default LogoButton

const Wrapper = styled.div`
    button:hover{
        cursor: pointer;
    }
`