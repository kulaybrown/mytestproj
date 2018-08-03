import React from 'react';
import boyPlaceholder from 'images/boy-placeholder.png';
import girlPlaceholder from 'images/girl-placeholder.png';
import insta from 'images/instagram-logo.svg';
import twit from 'images/twitter-logo.svg';
import youtube from 'images/youtube-logo.svg';
import divider1 from 'images/divider1.png';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { SpeakersWrap, ContainerWrap } from '../styles';


class Speakers extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SpeakersWrap id="speakers">
        <h1>KEYNOTE SPEAKERS</h1>
        <ThemeProvider
          theme={{
            space: [0, 6, 12, 18, 24],
            breakpoints: ['32em', '48em', '64em'],
          }}
        >
          <ContainerWrap>
            <Flex wrap className="speakers-cont">
              <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={2} py={2}>
                <div className="speakers-info">
                  <img alt="" src={girlPlaceholder} className="speaker-img" />
                  <div>
                    <h2>COMING SOON</h2>
                    {/* <h3>Talent Manager</h3> */}
                    <div className="speakers-social">
                      <Flex wrap>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={youtube} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={insta} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={twit} />
                        </Box>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Box>
              <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={2} py={2}>
                <div className="speakers-info">
                  <img alt="" src={boyPlaceholder} className="speaker-img" />
                  <div>
                    <h2>COMING SOON</h2>
                    {/* <h3>Talent Manager</h3> */}
                    <div className="speakers-social">
                      <Flex wrap>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={youtube} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={insta} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={twit} />
                        </Box>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Box>
              <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={2} py={2}>
                <div className="speakers-info">
                  <img alt="" src={girlPlaceholder} className="speaker-img" />
                  <div>
                    <h2>COMING SOON</h2>
                    {/* <h3>Talent Manager</h3> */}
                    <div className="speakers-social">
                      <Flex wrap>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={youtube} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={insta} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={twit} />
                        </Box>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Box>
              <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={2} py={2}>
                <div className="speakers-info">

                  <h1><span>MORE COMING SOON!</span></h1>

                  <img alt="" src={girlPlaceholder} className="speaker-img" />
                  <div>
                    <h2>COMING SOON</h2>
                    {/* <h3>Talent Manager</h3> */}
                    <div className="speakers-social">
                      <Flex wrap>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={youtube} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={insta} />
                        </Box>
                        <Box m={2}>
                          <p>1 M+</p>
                          <img alt="" src={twit} />
                        </Box>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Box>
            </Flex>
          </ContainerWrap>
        </ThemeProvider>
        <img alt="" src={divider1} className="divider" />
      </SpeakersWrap>
    );
  }
}


export default Speakers;
