import React from 'react';
import Scroll from 'react-scroll';
import imgAgencies from 'images/1agencies.jpg';
import imgBrands from 'images/2brands.jpg';
import imgCreator from 'images/3creators.jpg';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { AttendessWrap, ContainerWrap } from '../styles';


class Attendees extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const LinkScroll = Scroll.Link;
    return (
      <AttendessWrap>
        <h1>Who Should Attend?</h1>
        <ThemeProvider
          theme={{
            space: [0, 6, 12, 18, 24],
            breakpoints: ['32em', '48em', '64em'],
          }}
        >
          <ContainerWrap>
            <Flex wrap>
              <Box width={[1, 1, 1 / 3]} px={2}>
                <img alt="" src={imgCreator} />
                <div className="attendess-text">
                  <h2>CREATORS</h2>
                  <p>
                    Understand how to create viral content, grow and foster your community. Learn how to monetize and build businesses around instagram. Plus cement partnerships with the hottest brands and agencies in the market.
                </p>
                </div>
              </Box>
              <Box width={[1, 1, 1 / 3]} px={2}>
                <img alt="" src={imgBrands} />
                <div className="attendess-text">
                  <h2>BRANDS</h2>
                  <p>
                    <LinkScroll
                      to="location"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >Apply to Exhibit/Sponsor.
                    </LinkScroll>
                    Connect with the very influencers you&apos;re looking to partner with face to face. Build strategic partnerships and accelerate your brand exposure and growth.
                  </p>
                </div>
              </Box>
              <Box width={[1, 1, 1 / 3]} px={2} >
                <img alt="" src={imgAgencies} />
                <div className="attendess-text">
                  <h2>AGENCIES</h2>
                  <p>
                    <LinkScroll
                      to="location"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >Apply to Exhibit/Sponsor.
                    </LinkScroll>
                    The only event to gather the biggest Instagram Stars under one roof. This is your chance to work with the big players in the industry and discover the &apos;next big thing&apos; on Instagram.
                  </p>
                </div>
              </Box>
            </Flex>
          </ContainerWrap>
        </ThemeProvider>
      </AttendessWrap>
    );
  }
}


export default Attendees;
