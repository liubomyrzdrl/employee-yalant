/* eslint-disable no-extend-native */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import T from 'prop-types';
import '../../utils/date';
import s from './BirthdayEmployee.module.scss';


const BirthdayEmployee = ({ firstName, lastName, dob }) => {
 
    const date = new Date(dob).getFormatDate();
 
    return (
      <div className={s.birthday}>
        <div>{lastName}</div>
        <div>{firstName}</div>
        <div>
          <span>{date}</span>
         
        </div>
      </div>
    );
};

BirthdayEmployee.propTypes = {
    employee: T.shape({
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
        dob: T.object,
    }),
};

export default BirthdayEmployee;