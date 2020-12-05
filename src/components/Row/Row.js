import React from 'react';
import uuid from 'uuid/dist/v4';
import T from 'prop-types';
import s from './Row.module.scss'; 
import BirthdayEmployee from '../BirthdayEmployee/BirthdayEmployee';
import '../../utils/month';
 
const Row = ({ birthday, title }) => {     
     const filtered = birthday.filter(item => {        
        return String(new Date(item.dob).getFormatMonth()) === String(title);   
    });

    return (
      <div className={s.row}>
        <h3 className={s.row__title}>{title}</h3>
        {
              filtered.map(item => {                
                  return <BirthdayEmployee key={uuid()} {...item} />; 
              })
          }    
      </div>
    );
};

Row.propTypes = {
    title: T.string,
    isLoading: T.bool,
    birthday: T.arrayOf(T.shape({
      id: T. string,
      lastName: T.string,
      firstName: T.string,
      dob: T.string,
    })),
  };

export default Row;