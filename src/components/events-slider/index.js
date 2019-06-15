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
            site
            date(formatString: "D MMMM YYYY")
            image
          }
        }
      }
    }
  `);

  const event = events[0].node;

  return (
    <div className="EventsSlider">
      <div className="EventsSlider--item">{event.city}</div>
      <div className="EventsSlider--description">
        <ul>
          <li>
            <span>
              <strong>Where?</strong>
              {event.where}
            </span>
          </li>
          <li>
            <span>
              <strong>When?</strong>
              {event.date}
            </span>
          </li>
          <li>
            <span>
              <a href={event.site}>Find out more here!</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
