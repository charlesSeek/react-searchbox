import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

export default class App extends Component {
  render() {
    return (
      <div className="home">
     	<Header/>
     	<MainContent/>
     	<Footer/>
      </div>
    );
  }
}
