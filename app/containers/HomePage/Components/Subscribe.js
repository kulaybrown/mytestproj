import React from 'react';
import { SubscribeWrap } from '../styles';


class Subscribe extends React.PureComponent {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'https://creatorconf.activehosted.com/f/embed.php?id=2';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }
  render() {
    return (
      <SubscribeWrap>
        <h1>join our influencer community</h1>
        <p>Sign up for email alerts and stay in the know of all things Creator Conf</p>
        <div className="_form_2"></div>
      </SubscribeWrap>
    );
  }
}

export default Subscribe;
