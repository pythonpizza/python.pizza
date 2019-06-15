import React, { Component } from 'react';

import Container from '../container';
import Logo from '../logo';

import './index.css';

export default class Header extends Component {
  onNavClick(e) {
    e.preventDefault();

    const target = e.target;
    const destinationId = target.getAttribute('data-destination');
    const destinationDom = window.document.querySelector(`#${destinationId}`);

    if (!destinationDom) {
      return;
    }

    window.scrollTo({
      top: destinationDom.offsetTop,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="Header">
        <Container size="large">
          <Logo />
          <ul className="Header--links">
            <li>
              <a
                onClick={this.onNavClick}
                href="#past-events"
                data-destination="past-events"
              >
                Past events
              </a>
            </li>
            <li>
              <a
                onClick={this.onNavClick}
                href="#contactus"
                data-destination="contactus"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="https://hamburg.python.pizza?ref=global-header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hamburg
              </a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
