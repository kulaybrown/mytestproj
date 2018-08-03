/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import mainLogo from 'images/main-logo.png';
import fbLogo from 'images/facebook-logo.svg';
import twitLogo from 'images/twitter-logo.svg';
import instagramLogo from 'images/instagram-logo.svg';
import youtubeLogo from 'images/youtube-logo.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Flex, Box } from 'grid-styled';
import { Wrapper } from './style';


export class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Flex className="ftop" wrap>
          <Box className="blogo">
            <a href={`${process.env.PUBLIC_PATH}`}><img src={mainLogo} alt="" /></a>
            <p hidden>
              DECEMBER 2018 | SYDNEY
            </p></Box>
          <Box>
            <p>#CreatorConf</p>
            <div className="socials">
              <a>
                <ReactSVG path={fbLogo} />
              </a>
              <a><ReactSVG path={twitLogo} /></a>
              <a><ReactSVG path={instagramLogo} /></a>
              <a><ReactSVG path={youtubeLogo} /></a>
            </div>
          </Box>
        </Flex>
        <Flex className="fbot" wrap>
          <Box>
            <p>
              <strong>
                <a>Terms and Conditions</a><span> • </span>
                <a href={`${process.env.PUBLIC_PATH}privacy-policy`}>Privacy Policy</a><span> • </span>
                <a href={`${process.env.PUBLIC_PATH}cookie-declaration`}>Cookie Declaration</a>
              </strong><br />Contact us at:&nbsp;
                <strong><a>info@creatorconf.com</a></strong>
            </p>
          </Box>
          <Box>
            <p>
              Creator Conf is brought to you by iStack Conferences Ltd.
            </p>
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Footer);
