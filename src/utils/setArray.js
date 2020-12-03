/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
 

export const setArray = (arr) => {
 const set = new Set();

for(const i in arr) {
    set.add(arr[i]);
  }
  return Array.from(set);
};
 