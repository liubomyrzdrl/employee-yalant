import * as employeesActions from './employeesActions';
import * as employeesOperation from './employeesOperations';
import { getEmployees } from './employeesOperations';
import reducer from './employeeReducer';

export { employeesActions, employeesOperation, getEmployees };

export default reducer;