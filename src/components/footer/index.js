import React from 'react';

import Wave from '../wave';
import Container from '../container';

import './index.css';

const SOCIALS = [
  {
    name: 'facebook',
    icon: require('../../images/socials/facebook.png'),
    link: 'https://www.facebook.com/pythonpizza/',
  },
  {
    name: 'twitter',
    icon: require('../../images/socials/twitter.png'),
    link: 'https://twitter.com/pythonpizzaconf/',
  },
  {
    name: 'instagram',
    icon: require('../../images/socials/instagram.png'),
    link: 'https://www.instagram.com/python.pizza/',
  },
  {
    name: 'youtube',
    icon: require('../../images/socials/youtube.png'),
    link: 'https://www.youtube.com/channel/UCdtynhT6G97JwdDPsiKbx8Q/',
  },
];

export default props => {
  return (
    <footer className="footer">
      <Wave />

      <Container size="large">
        <div className="footer--socials">
          {SOCIALS.map(social => (
            <a
              key={social.name}
              id={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt={social.name} src={social.icon} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};
