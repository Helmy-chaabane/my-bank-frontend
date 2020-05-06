import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL ="http://localhost:4000";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) toast.error("Verify your informations please");
  const unexpectedError = error.response && error.response.status >= 500;
  if (unexpectedError) toast.error("An unexpected error occurrred.");
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};
