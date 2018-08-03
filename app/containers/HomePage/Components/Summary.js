import React from 'react';
import divider1 from 'images/divider1.png';
import divider2 from 'images/divider2.png';
import { SummaryWrap } from '../styles';


class Summary extends React.PureComponent {
  render() {
    return (
      <SummaryWrap id="details">
        <img src={divider1} alt="" />
        <ul>
          <li>
            <p className="title">1</p>
            <div></div>
            <p>Day</p>
          </li>
          <li>
            <p className="title">400+</p>
            <div></div>
            <p>Influential Creators</p>
          </li>
          <li>
            <p className="title">8+</p>
            <div></div>
            <p>Speakers</p>
          </li>
          <li>
            <p className="title">20+</p>
            <div></div>
            <p>Premium Brands</p>
          </li>
          <li>
            <p className="title">50+</p>
            <div></div>
            <p>A-List Agencies</p>
          </li>
        </ul>
        <img src={divider2} alt="" />
      </SummaryWrap>
    );
  }
}

export default Summary;
