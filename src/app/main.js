import React, {Component} from 'react';

import {WhoAmI} from './whoami';
import {AboutMe} from './aboutme';
import {Portfolio} from './portfolio';
export class Main extends Component {
  render() {
    return (
      <div className="app">
        <WhoAmI/>
        <AboutMe/>
        <Portfolio/>
      </div>
    );
  }
}
