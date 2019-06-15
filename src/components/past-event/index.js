import React from 'react';
import classnames from 'classnames';

import './index.css';

export default props => {
  const { date, site, city, image, nofilter } = props;

  const classes = classnames('PastEvent', {
    'PastEvent--no-filter': nofilter,
  });

  const year = new Date(date).getFullYear();

  return (
    <a
      href={`${site}?ref=python.pizza`}
      className={classes}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        style={{
          backgroundImage: `url(${require(`../../images/events/${image}.jpg`)})`,
        }}
        className="PastEvent--background"
      />
      <span>
        {city} {year}
      </span>
    </a>
  );
};

export const query = graphql`
  fragment PastEvent on PastEventsYaml {
    where
    date
    site
    city
    image
    nofilter
  }
`;
