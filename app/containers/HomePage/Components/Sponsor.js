import React from 'react';
import { SponsorWrap } from '../styles';

class Sponsor extends React.PureComponent {
  render() {
    return (
      <SponsorWrap id="sponsor">
        <p>Interested in becoming a sponsor?</p>
        <button>Learn More</button>
      </SponsorWrap>
    );
  }
}

export default Sponsor;
