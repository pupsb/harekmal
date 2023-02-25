import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const left = styled.div``
const center = styled.div``
const right = styled.div``
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <left>left</left>
        <center>center</center>
        <right>right</right>
      </Wrapper>
    </Container>
  )
}

export default Navbar