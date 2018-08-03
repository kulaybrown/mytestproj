import React from 'react';
import Scroll from 'react-scroll';
import creatorconfLogo from 'images/creatorconf-logo.svg';
import { HeaderWrap } from '../styles';


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Link = Scroll.Link;
    return (
      <HeaderWrap>
        <div className="header-content">
          <img src={creatorconfLogo} alt="Creator Conf" />
          <p>The must-attend event for Influential Creators</p>
          <Link
            to="tickets"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Buy Tickets Now
          </Link>
        </div>
      </HeaderWrap>
    );
  }
}


export default Header;
