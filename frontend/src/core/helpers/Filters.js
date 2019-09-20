export const getItem = (id, arr, prop) => {
  if (!arr) return null;
  const query = arr.filter(item => {
    return item[prop] == id;
  });
  if (!query.length) return null;
  else return query[0];
};
