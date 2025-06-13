import axios from "axios";

export interface fetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f66e2241955b44c4ae40b1df9b259c52",
  },
});
