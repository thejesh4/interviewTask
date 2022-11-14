export const setToken = (token) => {
  if (token) {
    localStorage.setItem('loginToken', token);
    return true;
  }
  return false;
};

export const getToken = () => {
  const token = localStorage.getItem('loginToken');
  if (token) {
    return token;
  }
  return false;
};

export const deleteToken = () => {
  if (getToken()) {
    localStorage.removeItem('loginToken');
    return true;
  }
  return false;
};

export const setTableItems = (values) => {
  localStorage.setItem('tableItem', values);
  return true;
}

export const getTableItems = () => {
  const data = localStorage.getItem('tableItem');
  if (data) {
    return JSON.parse(data);
  };
  return {};
}

export const getAge = (date) => {
  var age = new Date().getFullYear() - new Date(date).getFullYear();
  return age;
};

export const getID = () => {
  const data = getTableItems();
  if(data && data.tableData && data.tableData.length) {
    const getIds = data.tableData.map((item) => item.id && item.id);
    getIds.sort();
    return parseInt(getIds[getIds.length - 1]) + 1;
  }
  return 1;
};
