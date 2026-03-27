import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff5be839411647f097a2ba6ab675fbb3",
  },
});
