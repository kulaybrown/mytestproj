import React from 'react';
import Scroll from 'react-scroll';
import img4 from 'images/img4.jpg';
import img5 from 'images/img5.jpg';
import img6 from 'images/img6.jpg';
import { Flex, Box } from 'grid-styled';
import { AgendaWrap } from '../styles';


class Agenda extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Link = Scroll.Link;
    return (
      <AgendaWrap id="agenda">
        <Flex wrap>
          <Box width={[1, 1, 1, 1 / 2]}>
            <Flex wrap>
              <Box width={1}>
                <img alt="" src={img6} />
              </Box>
              <Box width={1 / 2}>
                <img alt="" src={img4} />
              </Box>
              <Box width={1 / 2}>
                <img alt="" src={img5} />
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]} px={2} className="agenda-content">
            <div>
              <h1>CREATORCONF AGENDA</h1>
              <h2>CREATORCONF IS THE WORLD&apos;S FIRST EVENT FOR INFLUENTIAL CREATORS. DISCOVER THE MOST INNOVATIVE BRANDS, SUCCESSFUL INFLUENCERS AND MARKETING SPECIALISTS IN THE INDUSTRY</h2>
              <p>CreatorConf is an elite gathering of instagram creators and online entrepreneurs, social media platforms, brands, talent agencies. This is your only opportunity to learn from experts who have built multi-million dollar businesses from instagram alone.
                <br /> Make powerful connections with the biggest names in industry that will help you close deals, drive exposure and exponential growth for you business.</p>
              <Link
                to="tickets"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >Buy Tickets Now</Link>
            </div>
          </Box>
        </Flex>
      </AgendaWrap>
    );
  }
}


export default Agenda;
