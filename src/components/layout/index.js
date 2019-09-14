import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer';
import Header from '../header';

import './reset.css';
import './theme.css';
import './fonts.css';
import './typography.css';

const Layout = ({ children, is404 }) => (
  <>
    <Header variant={is404 ? 'primary' : 'transparent'} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
