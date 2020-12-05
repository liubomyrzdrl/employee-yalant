import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/dist/v4';
import T from 'prop-types';
import Row from '../../Row/Row';
import '../../../utils/month';
import { months } from '../../../utils/months';
import { setArray } from '../../../utils/setArray';
import s from './BirthdayContainer.module.scss';

const BirthdayContainer = ({ birthday }) => {
  const filteredB = birthday.filter(item => {
     // eslint-disable-next-line max-len
     return String(new Date(item.dob).getFormatMonth()) === String(months[new Date(item.dob).getMonth()]);
  }); 

  const filteredMonth =  filteredB.map(item => String(new Date(item.dob).getFormatMonth()));

  const items = setArray(filteredMonth); 
  return (
    <div className={s.birthday}>
      <h1>Employees Birthday</h1>       
      {
        birthday.length === 0 ? <div style={{ color: 'red' }}>No selected employees</div> : (
        items.map(title => {
          return  <Row key={uuid()} {...{ birthday }} {...{ title }} />;
        }))     
      }        
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      birthday: state.birthdayReducer.items,
    };
};

BirthdayContainer.propTypes = {
  title: T.string,
  isLoading: T.bool,
  birthday: T.arrayOf(T.shape({
    id: T. string,
    lastName: T.string,
    firstName: T.string,  
    dob: T.string,    
  })),
};

export default connect(mapStateToProps)(BirthdayContainer);