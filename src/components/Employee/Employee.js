/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { birthdayOperation } from '../../modules/birthday';
import s from './Employee.module.scss';
import { Checkbox } from '../Checkbox/Checkbox';


const Employee = ({ employee, add,remove }) => {
  
    const onSwitch = ( checked ) => {
     
        if (!checked) {
             add(employee);
        } else {
            remove(employee.id);
        }
      
    };
    return (
      <div className={s.employee}>
        <div className={s.lastName}>{employee.lastName}</div>
        <div className={s.firstName}>
          {employee.firstName}
          {' '}
        </div>
        <Checkbox {...{ employee }} {...{ onSwitch }} />
      </div>
    );
};

const mapDispatchToState = {
    add: birthdayOperation.addBirthdayFunc,
    remove: birthdayOperation.removeBirthdayFunc,
 };

Employee.propTypes = {
    employee: T.shape({
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
    }),
  };

export default connect (null, mapDispatchToState)(Employee);
