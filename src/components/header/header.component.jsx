import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/coffee.svg';

import { HeaderContainer, LogoContainer, DivOptions } from './header.styles.jsx';

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <Logo className="logo"/>
        </LogoContainer>
        <DivOptions>
            <Link className="option" to='/'>SHOP</Link>
            <Link className="option" to='/'>CONTACT</Link>
            <Link className="option" to='/'>SIGN IN</Link>
        </DivOptions>
    </HeaderContainer>
)

export default Header;