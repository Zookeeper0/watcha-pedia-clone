import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "cb1616306a5824a082abcf3ce2efed9f",
  }
});

export default axiosInstance;