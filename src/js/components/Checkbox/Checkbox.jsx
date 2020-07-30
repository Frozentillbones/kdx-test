import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
  const { className, native, label, ...restProps } = props;
  return (
    <div className={className}>
      {label && 
        <label htmlFor={restProps.id} className={`${className}__label`}>
          {label}
        </label>
      }
      <input className={native ? `${className}__check` : `${className}__check visually-hidden`} {...restProps}/>
    </div>
  );
}

Checkbox.propTypes = {
  type: PropTypes.oneOf([
    'radio',
    'checkbox'
  ])
};

Checkbox.defaultProps = {
  type: 'checkbox',
  className: 'checkbox'
};