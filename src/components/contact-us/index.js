import React from 'react';

import Container from '../container';
import Form from '../form';

import './index.css';

export default props => {
  return (
    <Container className="ContactUs" size="small" id="contactus">
      <h1>Contact us</h1>
      <p>
        If you like{' '}
        <span role="img" aria-label="pizza">
          🍕
        </span>{' '}
        and{' '}
        <span role="img" aria-label="python">
          🐍
        </span>
        , get in touch! We are always looking for new places!
      </p>
      <Form />
    </Container>
  );
};
