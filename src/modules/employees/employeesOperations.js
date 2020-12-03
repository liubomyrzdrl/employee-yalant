
import { getEmloyeesStart, getEmloyeesSuccess, getEmloyeesError } from './employeesActions';
import { Api } from '../../api/Api';

export function getEmployees() {
  return async function getEmployeesThunk(dispatch) {
     try {
        dispatch(getEmloyeesStart());
 
        const employees = await Api.getAllEmployees();
    
        dispatch(getEmloyeesSuccess(employees.data));
     
     } catch (error) {
         dispatch(getEmloyeesError());
     }
   };
};  


 