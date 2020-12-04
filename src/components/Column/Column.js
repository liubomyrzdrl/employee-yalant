/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';
import Employee from '../Employee/Employee';
import s from './Column.module.scss';

// eslint-disable-next-line react/prop-types
const Column = ({ title, employees,  isLoading }) => {

     if(isLoading === true ) {
         return <div>Loading...</div>;
     }
 
    const filtered = employees.filter(item => String(item.lastName)[0] === title);
    
    const fitlteredEmployees = filtered.map(employee => {
          return (
            <Employee {...{ employee }} key={uuid()} />
            );
        });
        

    return (
      <div className={s.column}>
        <div className={s.column__title}>{ title }</div>
        {fitlteredEmployees.length === 0 ? <div> - - - </div> : (
          <div> 
            {' '}
            { fitlteredEmployees }
          </div>
) }
      </div>
    );
};

Column.propTypes = {
    title: PropTypes.string,
    isLoading: PropTypes.bool,
    // employees: PropTypes.arrayOf(PropTypes.object),
  };

export default Column;