import React from 'react'
import styled from 'styled-components';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{ title }</h1>
        <h4>{ description } <span>Touchless Delivery</span></h4>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            { leftBtnText }
          </LeftButton>
          { rightBtnText && 
            <RightButton>
            { rightBtnText }
            </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  z-index: 10;
  padding-top: 15vh;
  text-align: center;
  margin-top: 30px;
  color: #393c41;
  font-weight: 500;
  font-size: 24px;

  h4 {
    font-weight: 400;
    font-size: 15px;
    color: #5c5e62;
  }

  span {
    padding-bottom: 4px;
    paddin-top: 15px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`