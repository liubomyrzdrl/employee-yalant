import React from 'react';
import T from 'prop-types';
import '../../utils/date';
import s from './BirthdayEmployee.module.scss';


const BirthdayEmployee = ({ firstName, lastName, dob }) => { 
    const date = new Date(dob).getFormatDate();
    return (
      <div className={s.birthdayEmployee}>
        <div className={s.birthdayEmployee__circle} />
        <div className={s.birthdayEmployee__lastName}>{lastName}</div>
        <div className={s.birthdayEmployee__firstName}>{firstName}</div>
        <div>
          <span>{date}</span>         
        </div>
      </div>
    );
};

BirthdayEmployee.propTypes = { 
        lastName: T.string,
        firstName: T.string,
        dob: T.string,
};

export default BirthdayEmployee;