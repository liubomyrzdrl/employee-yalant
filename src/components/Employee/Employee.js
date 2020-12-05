 import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { birthdayOperation } from '../../modules/birthday';
import s from './Employee.module.scss';
import { Checkbox } from '../Checkbox/Checkbox';



const Employee = ({
  employee, 
  add, 
  remove, 
  birthdayEmployees, 
}) => {
     const onSwitch = ( checked ) => {
          if (!checked) {
             add(employee);
        } else {
            remove(employee.id);
        }
    };
    return (
      <div className={s.employee}>
        <div className={s.employee__lastName}>{employee.lastName}</div>
        <div className={s.employee__firstName}>
          {employee.firstName}
        </div>
        <Checkbox 
          {...{ onSwitch }} 
          {...{ birthdayEmployees }} 
          {...{ employee }} 
        />
      </div>
    );
};



const mapStateToProps = (state) => {
  return {
    birthdayEmployees: state.birthdayReducer.items,
  };
};

const mapDispatchToState = {
    add: birthdayOperation.addBirthdayFunc,
    remove: birthdayOperation.removeBirthdayFunc,
 };

Employee.propTypes = {
    add: T.func,
    remove: T.func,
    employee: T.shape({
        id: T. string,
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
    }),
    birthdayEmployees: T.arrayOf(T.shape({
      id: T. string,
      lastName: T.string.isRequired,
      firstName: T.string.isRequired,
   })),
  };

export default connect (mapStateToProps, mapDispatchToState)(Employee);
