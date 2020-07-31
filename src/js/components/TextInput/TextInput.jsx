import React, { useState, useCallback } from 'react';

export default function TextInput(props) {
  const {
    textarea,
    className,
    modifier,
    label,
    ...restProps
  } = props;

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const getLabelClassName = useCallback(() => {
    return textarea
      ? value 
        ? `${className}__label ${className}__label--textarea ${className}__label--textarea--focus`
        : `${className}__label ${className}__label--textarea ${focus ? `${className}__label--textarea--focus` : ''}`
      : value
        ? `${className}__label ${className}__label--focus`
        : `${className}__label ${focus ? `${className}__label--focus` : ''}`;
  }, [focus, className, textarea, value]);

  const getInputClassName = useCallback(() => {
      return value
        ? `${className}__${textarea ? 'textarea' : 'input'} ${className}__${textarea ? 'textarea' : 'input'}--focus`
        : `${className}__${textarea ? 'textarea' : 'input'} ${focus ? `${className}__${textarea ? 'textarea' : 'input'}--focus` : ''}`;
  }, [focus, className, textarea, value]);

  const onFocusBlur = useCallback(() => {
    setFocus((focus) => !focus);
  }, [setFocus]);

  const onChange = useCallback(({target: {value}}) => {setValue(value);}, [setValue]);

  if (textarea) {
    return (
      <div className={`${className} ${modifier ? `${className}--${modifier}` : ''}`}>
        {label && 
          <label 
            htmlFor={restProps.id} 
            className={getLabelClassName()}>
            {label}
          </label>
        }
        <textarea className={getInputClassName()} {...restProps} onFocus={onFocusBlur} onBlur={onFocusBlur} onChange={onChange}></textarea>
      </div>
    );
  }
  return (
    <div className={`${className} ${modifier ? `${className}--${modifier}` : ''}`}>
      {label &&
        <label htmlFor={restProps.id} className={getLabelClassName()}>
          {label}
        </label>
      }
      <input className={getInputClassName()} {...restProps} onFocus={onFocusBlur} onBlur={onFocusBlur} onChange={onChange}/>
    </div>
  );
}

TextInput.propTypes = {
  
};

TextInput.defaultProps = {
  type: 'text',
  className: 'text-input'
};