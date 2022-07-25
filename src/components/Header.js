import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

function Header({menuStatus, setMenuStatus}) {
  return (
    <Container>
      <HeaderLogo>
        <Link to='/'>
          <img 
            src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png' alt='' 
          />
        </Link>
      </HeaderLogo>
      <HeaderLinks>
        <Link to='/'>Model S</Link>
        <Link to='/'>Model 3</Link>
        <Link to='/'>Model X</Link>
        <Link to='/'>Model Y</Link>
        <Link to='/'>Solar Roof</Link>
        <Link to='/'>Solar Panels</Link>
      </HeaderLinks>
      <HeaderRight>
        <Link to='/' hide={menuStatus}>Shop</Link>
        <Link to='/' hide={menuStatus}>Account</Link>
        <HeaderMenu 
          onClick={() => setMenuStatus(!menuStatus)}
        >
          {menuStatus ? <CloseIcon/> : <Link to='/'>Menu</Link>}
        </HeaderMenu>
      </HeaderRight>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 25px;
  padding-top: 15px;
  z-index: 2;

  img {
    object-fit: contain;
    flex: 1;
    width: 100px;
    margin-right: 100px;
  }
`

const HeaderLinks = styled.div`
  display: flex;
  gap: 15px;
  top: 0;
  left: 0;
  right: 0;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black
    font-weight: 500;
    font-size: 15px;
    z-index: 0;
    position: relative;
  }

  @media(max-width: 1068px) {
    display: none;
  }
`

const HeaderRight = styled(HeaderLinks)`
  display: flex;
  align-items: center;
`

const HeaderMenu = styled.div`
  cursor: pointer;
`