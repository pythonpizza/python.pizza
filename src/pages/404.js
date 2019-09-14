import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

import './404.css';

const NotFoundPage = () => (
  <Layout is404>
    <SEO title="404: Not found" />
    <Container className="page-404" size="medium">
      <h1>Oh no :(</h1>
      <p>
        Can't find any{' '}
        <span role="image" aria-label="pizza">
          🍕
        </span>{' '}
        here
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
