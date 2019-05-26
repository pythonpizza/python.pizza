import React from 'react';

import Container from '../container';
import Form from '../form';

export default props => {
  return (
    <Container size="medium">
      <h1>Contact us</h1>
      <p>If you would like to organize a Python Pizza, get in touch!</p>
      <Container size="small">
        <Form />
      </Container>
    </Container>
  );
};
