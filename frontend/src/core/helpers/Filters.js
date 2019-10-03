// Find the first object in an array whose property defined by prop matches value
export const getItem = (value, arr, prop) => {
  if (!arr) return null;
  const query = arr.filter(item => {
    return item[prop] == value;
  });
  if (!query.length) return null;
  else return query[0];
};
