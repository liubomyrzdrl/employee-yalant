/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import T from 'prop-types';
import s from './Checkbox.module.scss';
  



export const Checkbox = ({  onSwitch,  employee, birthdayEmployee }) => {
 const i = birthdayEmployee.filter(item => item.id ===  employee.id);
  
 
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
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
    }),
    birthdayEmployee: T.arrayOf( T.shape({
        id: T.string,
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
        dob: T.object,
    })),
    onSwitch: T.func,
  };