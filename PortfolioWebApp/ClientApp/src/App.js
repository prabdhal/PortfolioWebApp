import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import TowerDefenceGame from './components/TowerDefenceGame';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Project} />
        <Route path='/contact' component={Contact} />
        <Route path='/tower-defence-3d-enemy-wave' component={TowerDefenceGame} />
      </Layout>
    );
  }
}
