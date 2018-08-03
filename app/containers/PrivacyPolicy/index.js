/**
 *
 * PrivacyPolicy
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Wrapper } from './style';


export class PrivacyPolicy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentWillMount() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.iubenda.com/assets/privacy_policy-dfbc51fbaff5ee29c944bb9407da000f.css';
    document.head.appendChild(link);
  }
  componentDidMount() {
    fetch('https://www.iubenda.com/api/privacy-policy/52940341')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
          // console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;
    return (
      <Wrapper>
        <Navigation />
        <SideNav />
        <div className="dec-header">
          <div>
            <h1>PRIVACY POLICY</h1>
          </div>
        </div>
        <div className="container" dangerouslySetInnerHTML={{ __html: items.content }}></div>
        <Footer />
      </Wrapper>
    );
  }
}

PrivacyPolicy.propTypes = {
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
)(PrivacyPolicy);
