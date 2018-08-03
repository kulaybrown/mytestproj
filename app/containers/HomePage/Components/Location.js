import React from 'react';
import imgLocation from 'images/location-img.jpg';
import { Flex, Box } from 'grid-styled';
import { LocationWrap } from '../styles';


class Location extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'https://creatorconf.activehosted.com/f/embed.php?id=8';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }
  render() {
    return (
      <LocationWrap id="location">
        <Flex wrap className="location-cont">
          <Box className="with-bg" width={[1, 1, 1, 1 / 2]}>
            <img src={imgLocation} alt="" />
            <div className="address-box">
              <div>
                <h1>LOCATION</h1>
                <p>The conference location will be announced soon!</p>
              </div>
            </div>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]}>
            <Flex className="contact-form">
              <div>
                <h1>CONTACT</h1>
                <div className="_form_8"></div>
              </div>
            </Flex>
          </Box>
        </Flex>
      </LocationWrap>
    );
  }
}


export default Location;
