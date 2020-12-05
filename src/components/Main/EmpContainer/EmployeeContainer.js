import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/dist/v4';
import T from 'prop-types';
import { getEmployees } from '../../../modules/employees';
import { alphabet } from '../../../utils/alphabet';
import Column from '../../Column/Column';
import s from './EmployeeContainer.module.scss';

const EmploeeContainer = ({ employees, isLoading, get }) => {
 
  useEffect(() => {
    get();
  }, [get]);
    return (
      <div className={s.container}>
        <h2>Employees</h2> 
        <div className={s.container__emloyees}>
          { alphabet.map((item ) => (
            <Column 
              title={item} 
              {...{ employees }} 
              {...{ isLoading }} 
              key={uuid()} 
            /> 
         ))}
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
      employees: state.employeeReducer.items,
      isLoading: state.employeeReducer.isLoading,
    };
};

const mapDispatchToState = {
    get: getEmployees,
};

EmploeeContainer.propTypes = {
  get: T.func,
  isLoading: T.bool, 
  employees: T.arrayOf(T.shape({
    id: T. string,
    lastName: T.string.isRequired,
    firstName: T.string.isRequired,
 })),
};

export default connect( mapStateToProps,mapDispatchToState,)(EmploeeContainer);