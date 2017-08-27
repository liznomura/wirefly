import React, { Component } from 'react';
import Logo from '../../wirefly_logo_white.png';
import Save from '../../svg/save.svg';
import Login from '../../svg/profile.svg';
import ExportCode from '../../svg/code.svg';
import Share from '../../svg/share.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={ Logo } className="logo" alt="logo"/>
        <img src={ Share } className="headerIcon" alt="save"/>
        <img src={ ExportCode } className="headerIcon" alt="save"/>
        <img src={ Save } className="headerIcon" alt="save"/>
        <img src={ Login } className="headerIcon" alt="login"/>
      </div>
      );
  }
}

export default Header;