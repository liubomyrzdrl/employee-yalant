/* eslint-disable no-extend-native */
/* eslint-disable func-names */
// eslint-disable-next-line no-multi-assign
const data =  Date.prototype.getFormatMonth = function() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `${  monthNames[this.getMonth()]  }`;
  };

  export default data;