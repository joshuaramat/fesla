import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <HeaderLogo>
        <img 
          src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png' alt='' 
        />
      </HeaderLogo>
      <Menu>
        {/* uses Redux to map over the car array that have car names */}
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>

        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        {/* opens the burger menu on the right side when clicked */}
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          Menu
        </CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          {/* closes the burger menu on the right side when clicked */}
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {/* uses Redux to map over the car array that have car names */}
        {cars && cars.map((car, index) => (
          <li key={index}><a href="#">{car}</a></li>

        ))}
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">More</a></li>
        <li><a href="#">United States</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding:0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const HeaderLogo = styled.div`
  img {
    object-fit: contain;
    flex: 1;
    width: 100px;
    margin-right: 100px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight:400;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media(max-width: 768px){
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:400;
    margin-right: 10px;
  }

  @media(max-width: 768px){
    a {
      display:none;
    }
  }
`

const CustomMenu = styled.div`
  cursor: pointer;
`
//smaller z-index to move over container
//if props show, then it moves the burger list out of the way

const BurgerNav = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom 0;
  right: 0;
  background-color:white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  margin-right: 0;
  li{
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0, .2);

    a {
      font-weight: 400;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`