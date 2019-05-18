import React from 'react';
import classnames from 'classnames';

import './index.css';

export default props => {
  const { size, children, className } = props;

  return (
    <div className={classnames('Container', `Container--${size}`, className)}>
      {children}
    </div>
  );
};
