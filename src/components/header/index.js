import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';
import classnames from 'classnames';

import Container from '../container';
import Logo from '../logo';

import './index.css';

export default class Header extends Component {
  static defaultProps = {
    variant: 'transparent',
  };

  onNavClick = e => {
    e.preventDefault();

    const target = e.target;
    const destinationId = target.getAttribute('data-destination');

    if (this.props.variant === 'primary') {
      navigate(`/#${destinationId}`);
      return;
    }

    const destinationDom = window.document.querySelector(`#${destinationId}`);

    if (!destinationDom) {
      return;
    }

    window.scrollTo({
      top: destinationDom.offsetTop,
      behavior: 'smooth',
    });
  };

  render() {
    const { variant } = this.props;

    return (
      <div
        className={classnames('Header', {
          'Header--primary': variant === 'primary',
        })}
      >
        <Container size="large">
          <Link to="/">
            <Logo />
          </Link>
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
