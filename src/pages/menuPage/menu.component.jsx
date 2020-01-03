import React from 'react';

import { MenuPageContainer } from './menu.styles';

import Directory from '../../components/directory/directory.component';

const MenuPage = () => (
    <MenuPageContainer style={{
        backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/HD-free-coffee-wallpaper-768x480.jpg)',
        backgroundSize: 'cover'
      }}>
        <Directory />
    </MenuPageContainer>
)

export default MenuPage;