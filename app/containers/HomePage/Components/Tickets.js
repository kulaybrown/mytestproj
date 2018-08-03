import React from 'react';
import badgeBlue from 'images/badgeblue.png';
import badgeViolet from 'images/badgeviolet.png';
import { Flex, Box } from 'grid-styled';
import { TicketsWrap } from '../styles';

class Tickets extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <TicketsWrap id="tickets">
        <h1>BUY TICKETS</h1>
        <ul>
          <li className="active">Early Bird</li>
          <li>Regular</li>
          <li>At the door</li>
        </ul>
        <Flex wrap className="ticket-box-container">
          <Box className="ticket-box" width={[1, 1, 1 / 2]}>
            <div>
              <div className="box-header">
                <h2>BEST VALUE</h2>
                <h1>INFLUENCERS</h1>
                <div className="badge">
                  <img src={badgeViolet} alt="" />
                </div>
              </div>
              <div className="box-desc">
                <div className="price hide">
                  <p>$199</p>
                </div>
                <ul>
                  <li><i className="material-icons">
                    check
                    </i>
                    Unique Influencer Pass
                  </li>
                  <li className="crossed-out">
                    <i className="material-icons">
                      close
                    </i>
                    VIP Reserved Front Row Seat
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Exhibition Access
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    8+ live speeches
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Networking Gala
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Goodie Bag
                  </li>
                </ul>
                <div className="buy-button">
                  <button>Coming Soon</button>
                </div>
              </div>
            </div>
          </Box>
          <Box className="ticket-box" width={[1, 1, 1 / 2]}>
            <div>
              <div className="box-header">
                <h2>MOST POPULAR</h2>
                <h1>VIP TICKET</h1>
                <div className="badge">
                  <img src={badgeBlue} alt="" />
                </div>
              </div>
              <div className="box-desc">
                <div className="price hide">
                  <p>$399</p>
                </div>
                <ul>
                  <li className="colored"><i className="material-icons">
                    check
                    </i>
                    VIP Influencer Pass
                  </li>
                  <li className="colored"><i className="material-icons">
                    check
                    </i>
                    VIP Reserved Front Row Seat
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Exhibition Access
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    8+ live speeches
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Networking Gala
                  </li>
                  <li><i className="material-icons">
                    check
                    </i>
                    Goodie Bag
                  </li>
                </ul>
                <div className="buy-button">
                  <p>More VIP benefits announced soon!</p>
                  <button>Coming Soon</button>
                </div>
              </div>
            </div>
          </Box>
        </Flex>
      </TicketsWrap>
    );
  }
}


export default Tickets;
