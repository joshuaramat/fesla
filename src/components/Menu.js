import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem';
import CloseIcon from '@material-ui/icons/Close';

function Menu(menuStatus, setMenuStatus) {
  return (
    <Container>
      <MenuNav show={menuStatus}>
        <CloseWrapper>
          {/* closes the menu on the right side when clicked */}
          <CustomClose onClick={() => setMenuStatus(!menuStatus)} />
        </CloseWrapper>
      </MenuNav>
      <MenuItem title='Existing Inventory' />
      <MenuItem title='Used Inventory' />
      <MenuItem title='Trade-In' />
      <MenuItem title='Test Drive' />
      <MenuItem title='Insurance' />
      <MenuItem title='Cybertruck' />
      <MenuItem title='Roadster' />
      <MenuItem title='Semi' />
      <MenuItem title='Charging' />
      <MenuItem title='Powerwall' />
      <MenuItem title='Commercial Energy' />
      <MenuItem title='Utilities' />
      <MenuItem title='Find Us' />
      <MenuItem title='Support' />
      <MenuItem title='Investor Relations' />
      <MenuItem title='United States' />
    </Container>
  )
}

export default Menu

const Container = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  background-color: white;
  z-index: 16;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 280px;
`

const MenuNav = styled.div`
  top: 0;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`