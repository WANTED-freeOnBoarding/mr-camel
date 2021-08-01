export const getProductDataApi = async () => {
  const data = await fetch("products.json");
  const productsData = await data.json();
  return productsData;
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getRecentList = () => {
  return getLocalStorage("recentList");
};

export const setRecentList = (value) => {
  return setLocalStorage("recentList", value);
};
