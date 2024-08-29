import axios from "axios";
import { url } from "../App";
console.log(url);
const todosLoader = async () => {
  const response = await axios.get(`${url / todos}`);
  return response.data;
};

export default todosLoader;
