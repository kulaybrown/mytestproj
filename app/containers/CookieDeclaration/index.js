/**
 *
 * CookieDeclaration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Wrapper, WrapperContainer } from './style';


export class CookieDeclaration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const script = document.createElement('script');
    const asd = document.getElementById('cookiedec');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/e52dc58f-76b8-4ea9-bacd-850bf3880522/cd.js';
    script.async = 'true';
    asd.appendChild(script);
  }
  render() {
    return (
      <Wrapper>
        <Navigation />
        <SideNav />
        <div className="dec-header">
          <div>
            <h1>COOKIE DECLARATION</h1>
          </div>
        </div>
        <WrapperContainer>
          <div id="cookiedec"></div>
        </WrapperContainer>
        <Footer />
      </Wrapper>
    );
  }
}

CookieDeclaration.propTypes = {
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
)(CookieDeclaration);
