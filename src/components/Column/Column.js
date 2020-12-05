import React from 'react';
import uuid from 'uuid/dist/v4';
import T from 'prop-types';
import Employee from '../Employee/Employee';
import s from './Column.module.scss';

 
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
    title: T.string,
    isLoading: T.bool,
    employees: T.arrayOf(T.shape({
      id: T. string,
        lastName: T.string.isRequired,
        firstName: T.string.isRequired,
    })),
  };

export default Column;