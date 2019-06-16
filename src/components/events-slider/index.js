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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={event.site}
        className="EventsSlider--description"
      >
        See you in <span>{event.city}</span> the <span>{event.date}</span>!
      </a>
    </div>
  );
};
