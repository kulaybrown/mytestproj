/**
*
* Navigation
*
*/

import React from 'react';
import Scroll from 'react-scroll';
import mainLogo from 'images/main-logo.png';
import { NavWrap, LogoDate, NavSection } from './style';
import { Links } from './constants';


class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const LinkScroll = Scroll.Link;
    const currentPath = window.location.pathname;
    return (
      <NavWrap>
        <LogoDate>
          <a href={`${process.env.PUBLIC_PATH}`}><img src={mainLogo} alt="" /></a>
          <p hidden>DECEMBER 2018 | Sydney</p>
        </LogoDate>
        {currentPath === '/' ? null :
        <NavSection>
          <ul>
            <li>
              <a href={`${process.env.PUBLIC_PATH}`}>Home</a>
            </li>
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
      </NavWrap>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
