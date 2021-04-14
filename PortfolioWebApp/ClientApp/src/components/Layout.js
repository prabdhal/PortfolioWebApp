import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Navbar />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
