/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/dist/v4';
import { getEmployees } from '../../../modules/employees';
import { alphabet } from '../../../utils/alphabet';
import Column from '../../Column/Column';



const EmploeeContainer = ({ employees, isLoading, getEmployees }) => {
 
  useEffect(() => {
    getEmployees();
  }, []);
    return (
      <div>
        <h3>Employees</h3>
        { alphabet.map((item ) => (
          <Column title={item} {...{ employees }} {...{ isLoading }} key={uuid()} /> 
         ))}
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