/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/dist/v4';
import { getEmployees } from '../../../modules/employees';
import { alphabet } from '../../../utils/alphabet';
import Column from '../../Column/Column';
import s from './EmployeeContainer.module.scss';



const EmploeeContainer = ({ employees, isLoading, getEmployees }) => {
 
  useEffect(() => {
    getEmployees();
  }, []);
    return (
      <div className={s.container}>
        <h2>Employees</h2> 
        <div className={s.container__emloyees}>
          { alphabet.map((item ) => (
            <Column title={item} {...{ employees }} {...{ isLoading }} key={uuid()} /> 
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
   getEmployees,
};

export default connect( mapStateToProps,mapDispatchToState,)(EmploeeContainer);