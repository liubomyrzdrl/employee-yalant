import React, { useState } from 'react';
import T from 'prop-types';


export const Checkbox = ({  onSwitch  }) => {
    const[checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        onSwitch(checked); 
    
    };
    return (
      <div>
        <input 
          type="checkbox" 
          onChange={handleChange}
          {...{ checked }}
          onClick={onSwitch}
        />

      </div>
);
};

Checkbox.propTypes = {
    employee: T.shape({
        id: T.string,
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
    }),
    onSwitch: T.func,
  };