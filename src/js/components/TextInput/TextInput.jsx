import React from 'react';

export default function TextInput(props) {
  const { textarea, className, label, ...restProps } = props;
  if (textarea) {
    return (
      <div className={className}>
        {label && 
          <label htmlFor={restProps.id} className={`${className}__label`}>
            {label}
          </label>
        }
        <textarea className={`${className}__textarea`} {...restProps}></textarea>
      </div>
    );
  }
  return (
    <div className={className}>
      {label &&
        <label htmlFor={restProps.id} className={`${className}__label`}>
          {label}
        </label>
      }
      <input className={`${className}__input`} {...restProps}/>
    </div>
  );
}

TextInput.propTypes = {
  
};

TextInput.defaultProps = {
  type: 'text',
  className: 'text-input'
};