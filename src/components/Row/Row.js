/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid/dist/v4';
import s from './Row.module.scss';

// import PropTypes from 'prop-types';
 
import BirthdayEmployee from '../BirthdayEmployee/BirthdayEmployee';
import '../../utils/month';
 

// eslint-disable-next-line react/prop-types
const Row = ({ birthday, title }) => {
     const filtered = birthday.items.filter(item => {
         
         
        return String(new Date(item.dob).getFormatMonth()) === String(title);
    
    
    });

    return (
      <div className={s.row}>
        <h3 className={s.row__title}>{title}</h3>
        {
              filtered.map(item => {                
                  return     <BirthdayEmployee key={uuid()} {...item} />; 
              })
          }
    
      </div>
    );
};

// Row.propTypes = {
//     title: PropTypes.string,
//     isLoading: PropTypes.bool,
//     // employees: PropTypes.arrayOf(PropTypes.object),
//   };

export default Row;