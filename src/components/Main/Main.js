import React from 'react';
import s from './Main.module.scss';
import EmployeeContainer from './EmpContainer/EmployeeContainer';
import BirthdayContainer from './BirthdayContainer/BirthdayContainer';


function Main() {
  // console.log(getEmloyeesError());
    return (
      <div className={s.main}>
        <h1>Main</h1> 
        <EmployeeContainer />
        <BirthdayContainer />
      </div>
    );
}

export default Main;