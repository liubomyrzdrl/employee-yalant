 import React, { useState } from 'react';
import T from 'prop-types';
import s from './Checkbox.module.scss';
  
export const Checkbox = ({  onSwitch,  employee, birthdayEmployees }) => {
 const i = birthdayEmployees.filter(item => item.id ===  employee.id); 
  // eslint-disable-next-line no-unneeded-ternary
  const[checked, setChecked] = useState(i.length === 0 ? false : true  );
 
   const handleChange = () => {
        setChecked(!checked);
        onSwitch(checked); 
    
    };
    return (
      <div className={s.checkbox}>
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
        lastName: T.string,
        firstName: T.string,
    }),
    birthdayEmployees: T.objectOf( T.shape({
        id: T.string,
        lastName: T.string,
        firstName: T.string,
        dob: T.object,
    })),
    onSwitch: T.func,
  };