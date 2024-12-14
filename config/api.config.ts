export const SERVER_URL = process.env.SERVER_URL as string;
export const API_URL = {
  root: (url = "") => `${url ? url : ""}`,

  auth: (url = "") => API_URL.root(`/auth${url}`),
  files: (url = "") => API_URL.root(`/statistics${url}`),
  users: (url = "") => API_URL.root(`/users${url}`),
  stores: (url = "") => API_URL.root(`/stores${url}`),
  colors: (url = "") => API_URL.root(`/colors${url}`),
  orders: (url = "") => API_URL.root(`/orders${url}`),
  reviews: (url = "") => API_URL.root(`/reviews${url}`),
  products: (url = "") => API_URL.root(`/products${url}`),
  categories: (url = "") => API_URL.root(`/categories${url}`),
  statistics: (url = "") => API_URL.root(`/statistics${url}`)
};
