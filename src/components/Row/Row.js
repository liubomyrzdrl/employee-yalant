/* eslint-disable react/prop-types */
import React from 'react';


// import PropTypes from 'prop-types';
 
import uuid from 'uuid/dist/v4';
import BirthdayEmployee from '../BirthdayEmployee/BirthdayEmployee';
import '../../utils/month';
// import { months } from '../../utils/months';

// eslint-disable-next-line react/prop-types
const Row = ({ birthday, title }) => {
     const filtered = birthday.items.filter(item => {
         
         
        return String(new Date(item.dob).getFormatMonth()) === String(title);
    
    
    });

    return (
      <div>
        <div>{title}</div>
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