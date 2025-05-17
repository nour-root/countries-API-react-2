import axios from "axios";
export default function GetCountryByName(name) {
  const response = axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return response;
}
