import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = date => {
  const match = date.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);

  if (!match) return date;

  const [, year, month, day] = match;
  const monthName = MONTHS[Number(month) - 1];

  return day ? `${Number(day)} ${monthName} ${year}` : `${monthName} ${year}`;
};

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
            date
            image
          }
        }
      }
    }
  `);

  const event = events[0].node;

  return (
    <div className="EventsSlider">
      <div className="EventsSlider--item">
        <a target="_blank" rel="noopener noreferrer" href={event.site}>
          {event.city}
        </a>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={event.site}
        className="EventsSlider--description"
      >
        See you in <span>{event.city}</span> on <span>{formatDate(event.date)}</span>!
      </a>
    </div>
  );
};
