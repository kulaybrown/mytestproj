/**
*
* SideNav
*
*/

import React from 'react';
import Scroll from 'react-scroll';
import mainLogo from 'images/main-logo.png';
import { NavWrap, NavSection, LogoDate, ReactDrawerStyle } from './style';
import { Links } from '../Navigation/constants';


class SideNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'right',
      noOverlay: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  onDrawerClose() {
    this.setState({ open: false });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const LinkScroll = Scroll.Link;
    const currentPath = window.location.pathname;
    return (
      <NavWrap>
        <div className="sidenav-cont">
          <LogoDate>
            <a to={`${process.env.PUBLIC_PATH}`}><img src={mainLogo} alt="" /></a>
            <p hidden>DECEMBER 2018 | Sydney</p>
          </LogoDate>
          <i
            className="material-icons"
            type="menu-fold"
            onClick={this.toggleDrawer}
            disabled={this.state.open && !this.state.noOverlay}
          >
            menu
          </i>
        </div>
        <ReactDrawerStyle
          className="rdrawer"
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}
        >
          {/* <Icon type="menu-fold" onClick={this.closeDrawer} /> */}
          {currentPath === '/' ? null :
            <NavSection>
              <ul>
                <li><a to={`${process.env.PUBLIC_PATH}`}>Home</a></li>
              </ul>
            </NavSection>
          }
          {currentPath === '/' ?
            <NavSection>
              <ul>
                {Links.map((val, index) => (
                  <li key={index.toString()}>
                    <LinkScroll
                      to={val.link}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {val.desc}
                    </LinkScroll>
                  </li>
                ))}
              </ul>
              <LinkScroll
                to="tickets"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ><button>Buy Tickets</button></LinkScroll>
              <LinkScroll
                to="location"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ><button>Sponsor/Exhibit</button></LinkScroll>
            </NavSection>
            : null}
        </ReactDrawerStyle>

      </NavWrap>
    );
  }
}

SideNav.propTypes = {

};

export default SideNav;
