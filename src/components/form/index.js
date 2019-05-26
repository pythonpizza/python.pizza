import React, { useState, useCallback } from 'react';

import './index.css';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [city, setCity] = useState('');

  const onChangeName = useCallback(e => setName(e.target.value), []);
  const onChangeEmail = useCallback(e => setEmail(e.target.value), []);
  const onChangeMessage = useCallback(e => setMessage(e.target.value), []);
  const onChangeCity = useCallback(e => setCity(e.target.value), []);
  const onSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            name,
            email,
            city,
            message,
          }),
        });

        console.log('response', response);
      } catch (e) {
        console.error('error');
      }
    },
    [name, email]
  );

  return (
    <form onSubmit={onSubmit} className="Form" name="contact">
      <label>
        <span>Your name</span>
        <input
          required
          onChange={onChangeName}
          value={name}
          type="text"
          name="name"
        />
      </label>
      <label>
        <span>Your Email</span>
        <input
          required
          onChange={onChangeEmail}
          value={email}
          type="email"
          name="email"
        />
      </label>
      <label>
        <span>City</span>
        <input
          required
          onChange={onChangeCity}
          value={city}
          type="text"
          name="city"
        />
      </label>
      <label>
        <span>Your message</span>
        <textarea
          required
          onChange={onChangeMessage}
          value={message}
          name="email"
        />
      </label>
      <div className="Form--submit-container">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
