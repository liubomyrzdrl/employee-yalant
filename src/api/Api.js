import axios from 'axios';


export const Api = {
 getAllEmployees() {
      return axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
  },
 };
 
