import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../container';
import PastEvent from '../past-event';

import './index.css';

export default props => {
  const {
    allPastEventsYaml: { edges: events },
  } = useStaticQuery(graphql`
    {
      allPastEventsYaml {
        edges {
          node {
            ...PastEvent
          }
        }
      }
    }
  `);

  const sorted = events.slice();
  sorted.sort(
    (a, b) => new Date(b.node.date).getTime() - new Date(a.node.date).getTime()
  );

  return (
    <Container className="PastEvents" size="large" id="past-events">
      <h1>Our past events</h1>

      <div className="PastEvents--list">
        {sorted.map(({ node: event }, i) => (
          <PastEvent key={i} {...event} />
        ))}
      </div>
    </Container>
  );
};
