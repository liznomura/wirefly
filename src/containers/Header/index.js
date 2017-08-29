import React, { Component } from 'react';
import Logo from '../../wirefly_logo_white.png';
import SaveIcon from '../../components/icons/saveIcon.js';
import UserIcon from '../../components/icons/userIcon.js';
import CodeIcon from '../../components/icons/codeIcon.js';
import ShareIcon from '../../components/icons/shareIcon.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
      <img src={ Logo } className="logo" alt="logo" />
        <SaveIcon />
        <CodeIcon />
        <ShareIcon />
        <UserIcon />
      </div>
      );
  }
}

export default Header;