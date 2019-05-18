import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import PastEvents from '../components/past-events';

export default props => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <PastEvents />
  </Layout>
);
