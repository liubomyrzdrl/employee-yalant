/* eslint-disable no-extend-native */
/* eslint-disable func-names */
// eslint-disable-next-line no-multi-assign
const data =  Date.prototype.getFormatDate = function() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `- ${this.getDate()  } ${  monthNames[this.getMonth()]  }, ${  this.getFullYear()} year`;
  };
  
  export default data;