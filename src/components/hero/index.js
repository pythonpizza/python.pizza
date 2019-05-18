import React, { Component } from 'react';

import Wave from '../wave';
import EventsSlider from '../events-slider';

import './index.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <EventsSlider />
        <Wave />
      </div>
    );
  }
}
