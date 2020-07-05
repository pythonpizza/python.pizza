import React, { useState, useCallback, useRef } from 'react';
import classnames from 'classnames';
import { useFormState } from 'react-use-form-state';

import './index.css';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default (props) => {
  const [formState, { text, email, textarea }] = useFormState();
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const formRef = useRef();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!isFormValid(formState)) {
        setFeedbackMessage('Please complete all required fields');
        return;
      }

      if (sendingMessage) {
        return;
      }

      setFeedbackMessage('Sending your message now 🚀');
      setSendingMessage(true);

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            name: formState.values.name,
            email: formState.values.email,
            city: formState.values.city,
            message: formState.values.message,
          }),
        });

        if (response.status !== 200) {
          throw new Error('unable to send message');
        }

        setFeedbackMessage('Thank you!');
        formState.clear();
        formRef.current.reset();
      } catch (e) {
        console.error('error', e);
        setFeedbackMessage('Unable to send the message, please try again');
      } finally {
        setSendingMessage(false);
      }
    },
    [formState.values, sendingMessage]
  );

  return (
    <form
      data-netlify="true"
      onSubmit={onSubmit}
      className="Form"
      name="contact"
      ref={formRef}
    >
      <input type="hidden" name="form-name" value="contact" />

      <Input {...text('name')} required label="Name*" />

      <Input {...email('email')} required label="Email*" />

      <Input {...text('city')} label="City" />

      <Input {...textarea('message')} type="textarea" label="Message*" />

      {feedbackMessage && (
        <p className="Form--feedback-message">{feedbackMessage}</p>
      )}

      <div className="Form--submit-container">
        <button disabled={sendingMessage} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

const Input = (props) => {
  const { type, label, className, ...others } = props;
  let input;

  switch (type) {
    case 'text':
    case 'email':
    case 'input':
      input = <input type={type} {...others} />;
      break;
    case 'textarea':
      input = <textarea type={type} {...others} />;
      break;
    default:
      throw new Error(`Ops: ${type}`);
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

const isFormValid = (formState) =>
  formState.validity.name &&
  formState.validity.email &&
  formState.validity.message;
