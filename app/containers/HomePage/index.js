/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navigation from 'components/Navigation';
import SideNav from 'components/SideNav';
import Footer from 'components/Footer';
import Header from './Components/Header';
import Subscribe from './Components/Subscribe';
import Agenda from './Components/Agenda';
import Attendees from './Components/Attendees';
import Speakers from './Components/Speakers';
import Tickets from './Components/Tickets';
import Location from './Components/Location';
import Sponsor from './Components/Sponsor';
import Summary from './Components/Summary';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <SideNav />
        <Header />
        <Subscribe />
        <Agenda />
        <Summary />
        <Attendees />
        <Speakers />
        <Tickets />
        <Sponsor />
        <Location />
        <Footer />
      </div>
    );
  }
}
