import React, { useState } from 'react';

export default function RadioGroup({children, ...restProps}) {

  const [checked, setChecked] = useState(null);

  return (
    <div {...restProps}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {checked: checked === child.props.id, setChecked});
      })}
    </div>
  );
}
