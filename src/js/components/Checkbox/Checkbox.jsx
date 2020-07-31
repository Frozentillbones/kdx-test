import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
  const { className, native, label, checked, setChecked, ...restProps } = props;
  const { value } = restProps;

  const getLabelClassName = useCallback(() => (
    `${className}__label ${checked ? `${className}__label--checked` : ''}`
  ), [ checked, className ]);

  const onChange = useCallback(({target: {id}}) => {
    setChecked(id);
  }, [setChecked]);

  return (
    <div className={className}>
      {label && 
        <label htmlFor={restProps.id} className={getLabelClassName()} style={{backgroundColor: value}}>
          {label}
        </label>
      }
      <input className={native ? `${className}__check` : `${className}__check visually-hidden`} onChange={onChange} {...restProps}/>
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