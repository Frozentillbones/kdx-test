import React from 'react';

export default function Select(props) {
  const { options, ...restProps } = props;

  return (
    <select {...restProps}>
      {
        options && options.map((option, i) => (
        <option key={i} value={option.value}>{option.displayName}</option>
        ))
      }
    </select>
  );
}
