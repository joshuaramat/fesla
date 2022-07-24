import React from 'react'
import styled from 'styled-components';

function MenuItem({title}) {
  return (
    <Container>
      <h4>{title}</h4>
    </Container>
  )
}

export default MenuItem

const Container = styled.div`
  border-bottom: 1px solid #d0d1d2;
  text-align: left;
  cursor: pointer;

  h4 {
    font-weight: 500;
    letter-spacing: 0.5px;
    padding-bottom: 15px;
    font-size: 15px;
    padding-left: 10px;
  }
`