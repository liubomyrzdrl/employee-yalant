/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/dist/v4';
import Row from '../../Row/Row';
import '../../../utils/month';
import { months } from '../../../utils/months';
import { setArray } from '../../../utils/setArray';


const BirthdayContainer = ({ birthday }) => {

  const filteredB = birthday.items.filter(item => {
      // eslint-disable-next-line max-len
   return String(new Date(item.dob).getFormatMonth()) === String(months[new Date(item.dob).getMonth()]);
  }); 

 
const filteredMonth =  filteredB.map(item => String(new Date(item.dob).getFormatMonth()));

 const items = setArray(filteredMonth);

 
    return (
      <div>
        <h3>Birthday</h3>
       
        {
             birthday.items.length === 0 ? <div>No selected employees</div> : (
              items.map(title => {
               return  <Row key={uuid()} {...{ birthday }} {...{ title }} />;
             }))     
        }
        
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
      birthday: state.birthdayReducer,
    };
};




export default connect(mapStateToProps)(BirthdayContainer);