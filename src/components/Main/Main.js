import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';  
import { handleInit } from '../../modules/init/initOpearations';
import s from './Main.module.scss';
import EmployeeContainer from './EmpContainer/EmployeeContainer';
import BirthdayContainer from './BirthdayContainer/BirthdayContainer';


function Main({ init }) {
   
  useEffect(() => {
    init();
  }, []);
    return (
      <div className={s.main}>
       
        <EmployeeContainer />
        <BirthdayContainer />
      </div>
    );
}


const mapDispatchToState = {
  init: handleInit,
 };
 
Main.propTypes = {
   init: T.func,
 };

export default connect(null, mapDispatchToState)(Main);