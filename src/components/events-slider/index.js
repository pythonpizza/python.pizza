import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.css';

export default props => {
  const {
    allFutureEventsYaml: { edges: events },
  } = useStaticQuery(graphql`
    {
      allFutureEventsYaml {
        edges {
          node {
            city
            where
          }
        }
      }
    }
  `);
  console.log('allFutureEventsYaml:', events);
  return (
    <div className="EventsSlider--wrapper">
      <ul className="EventsSlider">
        {events.map(({ node: event }, i) => {
          return (
            <li key={i} className="EventsSlider--item">
              {event.city}
            </li>
          );
        })}
      </ul>
      <div className="EventsSlider--description">
        <ul>
          <li>
            <strong>Where?</strong>
            SinnerSchrader
          </li>
          <li>
            <strong>When?</strong>
            20 December 2018
          </li>
          <li>
            <a href="/">Find out more here!</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
