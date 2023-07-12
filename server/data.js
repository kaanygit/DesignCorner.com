let dataJSON = null;

export const setData = (data) => {
  dataJSON = data;
};

export const getData = () => {
  return dataJSON;
};
