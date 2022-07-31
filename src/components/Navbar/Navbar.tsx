import React from 'react';
import styled from 'styled-components';

type Props = {
   title: string;
}

const Nav = styled.nav`
   display: flex;
   justify-content: center;
   padding: 20px;
   background-color: ${({theme}) => theme.background.primary};
`

const NavTitle = styled.h1`
   margin: 0;
   font-weight: 600;
   font-size: 40px;
   color: ${({theme}) => theme.title.primary};
`

const Navbar: React.FC<Props> = ({ title }) => {
   return (
      <Nav>
         <NavTitle>{title}</NavTitle>
      </Nav>
   )
}

export default Navbar;