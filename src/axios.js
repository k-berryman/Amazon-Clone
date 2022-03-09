import axios from "axios";

const instance = axios.create({
  // Put in URL of API (cloud function)
  baseURL: '...'
});

export default instance;
