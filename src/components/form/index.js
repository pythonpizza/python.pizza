import React, { useState, useCallback } from 'react';
import classnames from 'classnames';

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
  const [feedbackMessage, setFeedbackMessage] = useState('');

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

        setFeedbackMessage('Thank you!');
      } catch (e) {
        console.error('error', e);
        setFeedbackMessage('Unable to send the message, please try again');
      }
    },
    [name, email, city, message]
  );

  return (
    <form
      data-netlify="true"
      onSubmit={onSubmit}
      className="Form"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Input
        component="input"
        type="name"
        name="name"
        value={name}
        onChange={onChangeName}
        required
        label="Name*"
      />

      <Input
        component="input"
        type="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        required
        label="Email*"
      />

      <Input
        component="input"
        type="text"
        name="city"
        value={city}
        onChange={onChangeCity}
        label="City"
      />

      <Input
        required
        name="message"
        component="textarea"
        value={message}
        onChange={onChangeMessage}
        label="Message*"
      />

      <div className="Form--submit-container">
        <button type="submit">Send</button>
      </div>

      {feedbackMessage && <p>{feedbackMessage}</p>}
    </form>
  );
};

const Input = props => {
  const { component, label, className, ...others } = props;
  let input;

  switch (component) {
    case 'input':
      input = <input {...others} />;
      break;
    case 'textarea':
      input = <textarea {...others} />;
      break;
    default:
      throw new Error('Ops');
  }

  const classes = classnames(className, {
    'has-input': props.value.length > 0,
  });

  return (
    <label className={classes}>
      {input}
      <span>{label}</span>
    </label>
  );
};
